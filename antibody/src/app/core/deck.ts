import { Card } from "./card";

export class Deck {
  cards: Card[];
  graveyard: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }
  //returns a card
  drawCard() {
    let card = this.cards[0];
    this.cards.splice(0, 1);
    return card;
  }
  //shuffels the deck and the graveyard
  shuffle() {}
}
