import { Deck } from "./deck";
import { Card } from "./card";
import { Body } from "./body";
import { Effect } from "./effects/effect";
import { Hand } from "./hand";
import { Graveyard } from "./graveyard";

import { TicksPerDay, MillisecondsPerDay } from "./constants";
import { NewsMessage } from "./newsMessage";

export class Game {
  deck: Deck;
  hand: Hand;
  graveyard: Graveyard;
  body: Body;

  effects: Effect[] = [];

  news: NewsMessage[] = [];

  tickCount = 0;

  constructor(deck: Deck, body: Body) {
    this.deck = deck;
    this.body = body;
    this.body.game = this;

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
    this.tickCount += 1;
    for (let effect of this.effects) {
      effect.duration -= 1;
      if (effect.duration == 0) {
        effect.deactivate(this);
      }
    }
    this.effects = this.effects.filter(effect => effect.duration > 0);
    this.body.tick()
  }

  publishNews(content: string) {
    this.news.push(new NewsMessage(this.date, content));
  }

  playCard(card: Card) {
    console.log("played ", card.title);
    for (let effect of card.effects) {
      effect.activate(this);
    }
    this.effects = this.effects.concat(card.effects);
    this.discardCard(card);
  }

  get Deck() {
    return this.deck;
  }

  get date(): string {
    const startDate = new Date(2021, 0, 1, 0, 0, 0, 0);
    //console.log(this.tickCount / TicksPerDay);
    startDate.setTime(
      startDate.getTime() + (this.tickCount / TicksPerDay) * MillisecondsPerDay
    );
    return startDate.toLocaleString();
  }
}
