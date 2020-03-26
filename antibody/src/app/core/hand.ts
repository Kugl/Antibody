import { Card } from './card'

export class Hand {
  cards: Card[] = []

  remove(card) {
    const idx = this.cards.findIndex(handCard => handCard === card)
    console.log(idx)
    console.log(this.cards.length)
    this.cards.splice(idx, 1)
    console.log(this.cards.length)
  }
}