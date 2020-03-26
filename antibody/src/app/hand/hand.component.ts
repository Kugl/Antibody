import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Card } from "../core/card";
import { CentralService } from "../services/central.service";
import { Game } from "../core/game";

@Component({
  selector: "app-hand",
  templateUrl: "./hand.component.html",
  styleUrls: ["./hand.component.scss"]
})
export class HandComponent implements OnInit {
  cards: Card[] = [];
  currentGame: Game;
  constructor(private centServ: CentralService, private cdref: ChangeDetectorRef) {
    this.currentGame = this.centServ.getGame();
    this.cards = this.currentGame.hand.cards;
  }

  ngOnInit(): void {}

  drawCard() {
    this.centServ.drawCard()
    this.cdref.detectChanges()
    console.log(this.cards)
  }

  playCard(card: Card) {
    //trigger effects
    //Card ohne id
    this.centServ.playCard(card);
    //discard
  }

  discardCard(card: Card) {
    this.centServ.discardCard(card);
  }
}
