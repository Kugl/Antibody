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
    this.cards.push(
      new Card(
        "Hello",
        "assets/pictures/corona.jpg",
        "This is the text of the Card",
        []
      )
    );
    this.cards.push(
      new Card(
        "Card Two",
        "assets/pictures/corona.jpg",
        "This is the text of the Card two",
        []
      )
    );
    this.cards.push(
      new Card(
        "Card three",
        "assets/pictures/corona.jpg",
        "This is the text of the Card three",
        []
      )
    );
  }

  ngOnInit(): void {}

  drawCard() {
    //get card from Deck
    //REMOVE later:
    let card = new Card(
      "Card drawn",
      "assets/pictures/corona.jpg",
      "This is the text of the Card draw",
      []
    );
    this.cards.push(card);
  }

  playCard(index: number) {
    //trigger effects
    //Card ohne id
    //discard
    this.discardCard(index);
  }

  discardCard(index: number) {
    console.log(index);
    this.cards.splice(index, 1);
  }
}
