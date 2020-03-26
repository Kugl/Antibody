import { Card } from "./card";

export class Deck {
  graveyard: Card[];

  constructor(public cards: Card[]) {}
  //returns a card
  drawCard(): Card {
    let card = this.cards[0];
    this.cards.splice(0, 1);
    return card;
  }
  //shuffels the deck and the graveyard
  shuffle(): void {
    this.cards.push(...this.graveyard);
    let a = this.cards;
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
}
