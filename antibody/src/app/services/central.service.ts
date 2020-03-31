import { Injectable } from "@angular/core";
import { makeDefaultGame } from "../core/gameFactory";
import { Game } from "../core/game";
import { Card } from "../core/card";
import { Subject } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { EventMessage, DialogComponent } from "../dialog/dialog.component";

export interface CardPlayedEvent {
  Action: string;
  card?: Card;
}

@Injectable({ providedIn: "root" })
export class CentralService {
  game: Game;

  tickLength = 250;
  lastTime: number;

  CardSubject = new Subject<CardPlayedEvent>();

  startTime: number;

  constructor(private dialog: MatDialog) {
    this.game = makeDefaultGame();
    this.startTime = new Date().getTime();
    this.lastTime = this.startTime;
    const that = this;
    this.mainLoop(that);
    //Displays a welcome message
    this.openDialog({
      description: "Welcome!",
      picture: "assets/pictures/corona.jpg",
      text: `In this game you take over the job of the immune System. Your task is to coordiante the immune defense and protect the body from diseases. Play cards to trigger defensive Actions`
    });
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
    let tickLength = that.tickLength;
    let timeDiff = currentTime - that.lastTime;
    if (tickLength < timeDiff) {
      that.game.tick();
      that.lastTime += tickLength;
      timeDiff -= tickLength;
    }
    if (tickLength < timeDiff) {
      // catch up
      setTimeout(() => that.mainLoop(that), 5);
    } else {
      setTimeout(() => that.mainLoop(that), Math.min(1000, tickLength / 3));
    }
  }
  openDialog(data: EventMessage) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data
    });
    dialogRef.afterClosed().subscribe(result => {});
    /*
    dialogRef.afterClosed().subscribe(() => {
      this.mainLoop(this);
    });*/
  }
}
