import { Deck } from "./deck";
import { Card } from "./card";
import { Body } from "./body";
import { Effect } from "./effects/effect";
import { Hand } from "./hand";
import { Graveyard } from "./graveyard";

import { NewsTicker } from "./newsTicker";
import { Clock } from "./clock";
import { Subject } from "rxjs";

export interface EffectEvent {
  Action: string;
}

export class Game {
  deck: Deck;
  hand: Hand;
  graveyard: Graveyard;
  body: Body;

  EffectSubject = new Subject<EffectEvent>();
  effects: Effect[] = [];

  newsTicker: NewsTicker;
  clock: Clock;

  constructor(deck: Deck, body: Body) {
    this.deck = deck;
    this.body = body;
    this.clock = new Clock();

    this.newsTicker = new NewsTicker(this.clock);
    this.body.newsTicker = this.newsTicker;

    this.hand = new Hand();
    this.deck.shuffle();
    while (this.hand.cards.length < 3 && this.deck.cards.length > 0) {
      this.drawCard();
    }
  }

  drawCard() {
    if (this.deck.cards.length < 1) {
      this.deck.shuffle();
    }
    if (this.deck.cards.length < 1) {
      alert("NO CARDS IN DECK AND GRAVEYARD");
      return;
    }
    const drawnCard = this.deck.drawCard();
    this.hand.cards.push(drawnCard);
  }

  discardCard(card: Card) {
    this.hand.remove(card);
    this.deck.graveyard.push(card);
  }

  /**
   * progresses game state by one unit of time
   */
  tick() {
    this.clock.tick();
    for (let effect of this.effects) {
      effect.duration -= 1;
      if (effect.duration == 0) {
        effect.deactivate(this);
      }
    }
    this.effects = this.effects.filter(effect => effect.duration > 0);
    this.EffectSubject.next({ Action: "Deactivate" });
    this.body.tick();
  }

  playCard(card: Card) {
    console.log("played ", card.title);
    const effects = []
    for (let effectFactory of card.effectFactories) {
      const effect = effectFactory.make()
      effect.activate(this);
      this.effects.push(effect)
    }
    this.EffectSubject.next({ Action: "Actiate" });
    this.discardCard(card);
  }

  get Deck() {
    return this.deck;
  }
}
