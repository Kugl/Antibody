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

  CardSubject = new Subject<CardPlayedEvent>();

  constructor() {
    this.game = makeDefaultGame();
    // Game loop below
    // TODO: proper timing logic -- simple interval will lead to variable game speeds
    let that = this;
    setInterval(function() {
      that.game.tick();
    }, 60);
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
}
