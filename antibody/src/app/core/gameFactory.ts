import { Game } from './game'
import { Deck } from './deck'
import { Card } from './card'
import { Body } from './body'
import { makeFeverCard } from './cards/fever'
import { makeRunnyNoseCard } from './cards/runnyNose'

const deckSpec = [
  {factory: makeFeverCard, count: 3},
  {factory: makeRunnyNoseCard, count: 3}
]

export function makeDefaultGame(): Game {
  const cards: Card[] = []
  for (let spec of deckSpec) {
    for(let i=0; i < spec.count; i++) [
      cards.push(spec.factory())
    ]
  }
  const deck = new Deck(cards)
  const body = new Body()
  return new Game(deck, body)
}