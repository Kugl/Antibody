import { Injectable } from "@angular/core";
import { makeDefaultGame } from "../core/gameFactory";
import { Game } from "../core/game";
import { Card } from "../core/card";
import { Subject } from "rxjs";

export interface CardPlayedEvent {
  Action: string;
  card?: Card;
}

@Injectable({ providedIn: "root" })
export class CentralService {
  game: Game;

  tickLength = 60;
  lastTime: number;

  CardSubject = new Subject<CardPlayedEvent>();

  startTime: number;

  constructor() {
    this.game = makeDefaultGame();
    this.startTime = new Date().getTime();
    this.lastTime = this.startTime;
    // Game loop below
    // TODO: proper timing logic -- simple interval will lead to variable game speeds
    const that = this;
    this.mainLoop(that)
  }

  getGame() {
    return this.game;
  }

  drawCard() {
    this.game.drawCard();
    this.CardSubject.next({ Action: "Draw" });
  }

  playCard(card: Card) {
    this.game.playCard(card);
    this.CardSubject.next({ Action: "Play", card });
  }

  discardCard(card: Card) {
    this.game.discardCard(card);
    this.CardSubject.next({ Action: "Discard", card });
  }


  mainLoop(that) {
    let dateObject = new Date();
    let currentTime = dateObject.getTime();
    console.log("mainloop", (currentTime - that.startTime) / that.game.clock.tickCount)
    let tickLength = that.tickLength;
    console.log(currentTime-that.lastTime)
    let timeDiff = currentTime - that.lastTime;
    if (tickLength < timeDiff) {
      that.game.tick();
      that.lastTime += tickLength;
      timeDiff -= tickLength;
    }
    if (tickLength < timeDiff) { // catch up
      setTimeout(() => that.mainLoop(that), 5)
    } else {
      setTimeout(() => that.mainLoop(that), Math.min(1000, tickLength / 3))
    }
  }

}
