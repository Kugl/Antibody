import { Card } from "./card";

export class Deck {
  cards: Card[];
  graveyard: Card[];

  constructor(cards) {
    this.cards = cards;
  }
  //returns a card
  drawCard() {}
  //shuffels the deck and the graveyard
  shuffle() {}
}
