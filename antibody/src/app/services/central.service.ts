import { Injectable } from "@angular/core";
import { makeDefaultGame } from "../core/gameFactory";
import { Game } from "../core/game";
import { Card } from "../core/card";
import { Subject } from "rxjs";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";
import { EventMessage } from "../core/body";
import { GoogleAnalyticsService } from "./analytics2.service";
import { GameOverComponent } from "../dialog/game-over/game-over.component";
import { ChooseCardComponent } from "../dialog/choose-card/choose-card.component";

const BaseTickLength = 200;

export interface CardPlayedEvent {
  Action: string;
  card?: Card;
}

@Injectable({ providedIn: "root" })
export class CentralService {
  game: Game;

  tickLength = BaseTickLength;
  lastTime: number;

  CardSubject = new Subject<CardPlayedEvent>();

  startTime: number;

  constructor(
    private dialog: MatDialog,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {
    this.game = makeDefaultGame();
    this.startTime = new Date().getTime();
    this.lastTime = this.startTime;
    const that = this;
    this.mainLoop(that);
    this.openGameChooseCardDialog();
    //Displays a welcome message
    this.openDialog({
      description: "Welcome!",
      picture: "assets/pictures/corona.jpg",
      text: `In this game you take over the job of the immune System. Your task is to coordiante the immune defense and protect the body from diseases. Play cards to trigger defensive Actions`,
    });
    //Opens dialog upon infection
    this.game.body.BodyEventSubject.subscribe((event) => {
      this.openDialog(event);
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
    this.googleAnalyticsService.eventEmitter(
      card.title,
      "cards",
      "card_play",
      "play",
      1
    );
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
      data,
    });
    this.openGenericDialog(dialogRef);
  }
  openGameOverDialog() {
    const godialogRef = this.dialog.open(GameOverComponent, {
      data: { game: this.game },
    });
    this.openGenericDialog(godialogRef);
  }

  openGameChooseCardDialog() {
    const gcarddialogRef = this.dialog.open(ChooseCardComponent, {
      data: { game: this.game },
    });
    this.openGenericDialog(gcarddialogRef);
  }

  openGenericDialog(
    dialogRef: MatDialogRef<
      DialogComponent | GameOverComponent | ChooseCardComponent,
      any
    >
  ) {
    this.tickLength = 10000;
    dialogRef.afterClosed().subscribe((result) => {
      this.tickLength = BaseTickLength;
      // to prevent the main loop from trying to catch up on missed ticks:
      this.lastTime = Math.max(
        this.lastTime,
        new Date().getTime() - BaseTickLength
      );
    });
  }
}
