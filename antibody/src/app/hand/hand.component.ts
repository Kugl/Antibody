import { Component, OnInit } from "@angular/core";
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
  constructor(private centServ: CentralService) {
    this.currentGame = this.centServ.getGame();

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

  playCard(index: number, card: Card) {
    //trigger effects
    //Card ohne id
    this.currentGame.playCard(card);
    //discard
    this.discardCard(index);
  }

  discardCard(index: number) {
    console.log(index);
    this.cards.splice(index, 1);
  }
}
