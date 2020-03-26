import { Deck } from './deck';
import { Card } from './card';
import { Body } from './body';
import { Effect } from './effects/effect'

export class Game {
  
  deck: Deck
  body: Body

  effects: Effect[] = []

  tickCount = 0

  constructor(deck: Deck, body: Body) {
    this.deck = deck
    this.body = body
  }

  /**
   * progresses game state by one unit of time
   */
  tick () {
    this.tickCount += 1
    for(let effect of this.effects) {
      effect.apply(this)
      effect.duration -= 1
    }
    for(let effect of this.effects) {
      if (effect.duration == 0) {
        effect.deactivate(this)
      }
    }
    this.effects = this.effects.filter(effect => effect.duration > 0)
  }

  playCard(card: Card) {
    console.log("played ", card.title)
    this.effects = this.effects.concat(card.effects)
  }
}