import { Deck } from "./deck";
import { Card } from "./card";
import { Body } from "./body";
import { Effect } from "./effects/effect";
import { Hand } from "./hand";
import { Graveyard } from "./graveyard";

import { NewsTicker } from "./newsTicker";
import { Clock } from "./clock";
import { interval, Subject } from "rxjs";
import { TicksPerDay } from "./constants";
import { take } from "rxjs/operators";

export interface EffectEvent {
  Action: string;
}

export class Game {
  readonly INITIAL_CARDS_DRAWN = 3;
  readonly INITIAL_CARD_DRAW_INTERVAL = 1000;

  deck: Deck;
  hand: Hand;
  graveyard: Graveyard;
  body: Body;

  EffectSubject = new Subject<EffectEvent>();
  ErrorSubject = new Subject<EffectEvent>();
  effects: Effect[] = [];

  newsTicker: NewsTicker;
  clock: Clock;

  ticksUntilNextCard: number;
  cardsPerDay: number;

  constructor(deck: Deck, body: Body) {
    this.deck = deck;
    this.body = body;
    this.cardsPerDay = 3;
    this.ticksUntilNextCard = TicksPerDay / this.cardsPerDay;
    this.clock = new Clock();

    this.newsTicker = new NewsTicker(this.clock);
    this.body.newsTicker = this.newsTicker;

    this.hand = new Hand();
    this.deck.shuffle();
    interval(this.INITIAL_CARD_DRAW_INTERVAL)
      .pipe(take(this.INITIAL_CARDS_DRAWN))
      .subscribe(() => {
        this.drawCard();
      });
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
    this.effects = this.effects.filter((effect) => effect.duration > 0);
    this.EffectSubject.next({ Action: "Deactivate" });
    this.body.tick();
    this.ticksUntilNextCard -= 1;
    if (this.ticksUntilNextCard == 0) {
      this.nextCard();
      this.ticksUntilNextCard = TicksPerDay / this.cardsPerDay;
    }
  }

  /**
   * As a ratio, how much time left until getting the next card.
   */
  get nextCardTimeRatio() {
    return this.ticksUntilNextCard / (TicksPerDay / this.cardsPerDay);
  }

  nextCard() {
    if (this.hand.cards.length < this.hand.slots) {
      this.drawCard();
    } else {
      const cardToRemove = this.hand.getRandomCard();
      this.discardCard(cardToRemove);
      this.drawCard();
    }
  }

  playCard(card: Card) {
    if (card.energyCost > this.body.energy) {
      console.log("Energy Low");
      this.ErrorSubject.next({ Action: "Energy" });
      return;
    }
    console.log("played ", card.title);
    const effects = [];
    for (let effectFactory of card.effectFactories) {
      const effect = effectFactory.make();
      effect.activate(this);
      this.effects.push(effect);
    }
    this.body.energy -= card.energyCost;
    this.EffectSubject.next({ Action: "Actiate" });
    this.discardCard(card);
  }

  get Deck() {
    return this.deck;
  }
}
