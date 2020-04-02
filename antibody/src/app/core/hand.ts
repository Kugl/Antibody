import { Card } from "./card";

export class Hand {
  cards: Card[] = [];
  slots = 3;

  getRandomCard(): Card {
    const randomIdx = Math.floor(Math.random() * this.cards.length);
    const card = this.cards[randomIdx];
    return card;
  }

  remove(card) {
    const idx = this.cards.findIndex(handCard => handCard === card);
    console.log(idx);
    console.log(this.cards.length);
    this.cards.splice(idx, 1);
    console.log(this.cards.length);
  }
}
