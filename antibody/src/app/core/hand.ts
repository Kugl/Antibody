import { Card } from './card'

export class Hand {
  cards: Card[]

  remove(card) {
    this.cards = this.cards.filter(cardOnHand => cardOnHand != card)
  }
}