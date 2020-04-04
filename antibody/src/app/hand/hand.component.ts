import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Card } from "../core/card";
import { CentralService } from "../services/central.service";
import { Game } from "../core/game";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  trigger,
  transition,
  style,
  animate,
  sequence,
  group,
} from "@angular/animations";

@Component({
  selector: "app-hand",
  templateUrl: "./hand.component.html",
  styleUrls: ["./hand.component.scss"],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ "margin-right": -100, "margin-left": -100, height: 0 }),
        animate(
          ".6s ease-out",
          style({ "margin-right": "8px", "margin-left": "8px", height: 280 })
        ),
      ]),
      // //with opacity
      // transition(":enter", [
      //   style({ 'margin-right': -100, 'margin-left': -100, height: 0, opacity: 0 }),
      //   animate(".6s ease-out", style({ 'margin-right': '8px', 'margin-left': '8px', height: 280, opacity: 1 }))
      // ]),
      transition(":leave", [
        style({
          "padding-bottom": 0,
          "margin-top": 0,
          opacity: 1,
          "z-index": 100,
        }),
        group([
          animate(
            ".5s ease-out",
            style({
              "padding-bottom": 300,
              "margin-top": -300,
              "margin-right": -100,
              "margin-left": -100,
            })
          ),
          sequence([
            animate(".3s ease-out", style({ opacity: 1 })),
            animate(".4s ease-out", style({ opacity: 0 })),
          ]),
        ]),
      ]),
      // //transition-up animation
      // transition(":leave", [
      //   style({ 'padding-bottom': 0, 'margin-top': 0, opacity: 1 }),
      //   animate(".6s ease-out", style({ 'padding-bottom': 100, 'margin-top': -100,  opacity: 0 }))
      // ])
    ]),
  ],
})
export class HandComponent implements OnInit {
  cards: Card[] = [];
  currentGame: Game;
  constructor(
    private centServ: CentralService,
    private cdref: ChangeDetectorRef
  ) {
    this.currentGame = this.centServ.getGame();
    this.cards = this.currentGame.hand.cards;
  }

  ngOnInit(): void {}

  drawCard() {
    this.centServ.drawCard();
    this.cdref.detectChanges();
    console.log(this.cards);
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

  drop(event: CdkDragDrop<Card[]>) {
    if (event.distance.y < -150) {
      this.playCard(event.item.data);
    } else {
      moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    }
  }
}
