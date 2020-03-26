import { Game } from './game'
import { Deck } from './deck'
import { Card } from './card'
import { Body } from './body'
import { makeFeverCard } from './cards/fever'

export function makeDefaultGame(): Game {
  const fever = makeFeverCard()
  const cards: Card[] = [fever]
  const deck = new Deck(cards)
  const body = new Body()
  return new Game(deck, body)
}