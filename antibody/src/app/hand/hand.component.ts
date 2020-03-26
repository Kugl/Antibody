import { Component, OnInit } from "@angular/core";
import { Card } from "../core/card";

@Component({
  selector: "app-hand",
  templateUrl: "./hand.component.html",
  styleUrls: ["./hand.component.scss"]
})
export class HandComponent implements OnInit {
  cards: Card[] = [];

  constructor() {
    //for tetsing only
  }

  ngOnInit(): void {}

  drawCard() {
    //get card from Deck
    //REMOVE later:
    let card = new Card("Hello", "aaa", "asdads", []);
    this.cards.push(card);
  }

  playCard(id: number) {
    //trigger effects
    //Card ohne id
    //discard
    this.discardCard(id);
  }

  discardCard(id: number) {
    this.cards = this.cards.filter(function(obj) {
      // return obj.id !== id;
    });
  }
}
