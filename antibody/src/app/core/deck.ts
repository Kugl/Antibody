import { Card } from "./card";

export class Deck {
  graveyard: Card[];

  constructor(private cards: Card[]) {}
  //returns a card
  drawCard() {
    let card = this.cards[0];
    this.cards.splice(0, 1);
    return card;
  }
  //shuffels the deck and the graveyard
  shuffle() {}
}
