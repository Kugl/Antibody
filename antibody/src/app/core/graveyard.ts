import { Card } from './card'

export class Graveyard {
  cards: Card[]

  add(card) {
    this.cards.push(card)
  }
}