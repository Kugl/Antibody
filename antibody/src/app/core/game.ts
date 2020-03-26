import { Deck } from "./deck";
import { Card } from "./card";
import { Body } from "./body";
import { Effect } from "./effects/effect";
import { Hand } from "./hand"
import { Graveyard } from './graveyard';

export class Game {
  deck: Deck;
  hand: Hand;
  graveyard: Graveyard;
  body: Body;


  effects: Effect[] = [];

  tickCount = 0;

  constructor(deck: Deck, body: Body) {
    this.deck = deck;
    this.body = body;
  }

  /**
   * progresses game state by one unit of time
   */
  tick() {
    this.tickCount += 1;
    for (let effect of this.effects) {
      effect.duration -= 1;
      if(effect.duration == 0) {
        effect.deactivate(this)
      }
    }
    this.effects = this.effects.filter(effect => effect.duration > 0);
  }

  playCard(card: Card) {
    console.log("played ", card.title);
    for(let effect of card.effects) {
      effect.activate(this)
    }
    this.effects = this.effects.concat(card.effects);
    this.hand.remove(card)
    this.graveyard.add(card)
  }

  get Deck() {
    return this.deck;
  }
}
