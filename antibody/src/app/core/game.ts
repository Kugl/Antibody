import { Deck } from "./deck";
import { Card } from "./card";
import { Body } from "./body";
import { Effect } from "./effects/effect";
import { Hand } from "./hand";
import { Graveyard } from "./graveyard";
import {
  makeVirusArray,
  makeBacteriaArray,
  Virus,
  Bacteria,
  Disease
} from "./diseases/diseases";
import { VirusInfection, BacteriaInfection } from "./infection";

import { NewsMessage } from "./newsMessage";
import { WhiteBloodcell, TCell } from "./immune-system/antibodys";

const TicksPerDay = 15 * 24;
const MillisecondsPerDay = 1000 * 60 * 60 * 24;

export class Game {
  deck: Deck;
  hand: Hand;
  graveyard: Graveyard;
  body: Body;
  viruses: Virus[];
  bacteria: Bacteria[];
  virusInfections: VirusInfection[];
  bacterialInfections: BacteriaInfection[];
  // Added this to the game, as it is the same level as diseases. Move to Body?
  whiteCells: WhiteBloodcell;
  tCells: TCell[];

  effects: Effect[] = [];

  news: NewsMessage[] = [];

  tickCount = 0;

  constructor(deck: Deck, body: Body) {
    this.deck = deck;
    this.body = body;
    this.viruses = makeVirusArray();
    this.bacteria = makeBacteriaArray();

    //Added Michael
    this.whiteCells = new WhiteBloodcell();
    //Game starts without TCells
    this.tCells = [];

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
    for (let virus of this.viruses) {
      if (Math.random() < virus.ChanceOfInfection / TicksPerDay + 0.01) {
        // +0.01 is for testing only, to have more frequent infections
        this.news.push(
          new NewsMessage(
            this.date,
            "You have been infected with " + virus.Name
          )
        );
        // TODO: 1) check if infection already exists; 2) if not, add infection to list of active infections. 3) handle infections in tick method.
      }
    }
    this.mucusFlushesDiseases(this.bacteria);
    this.mucusFlushesDiseases(this.viruses);
    this.tCellsBattleViruses();
    this.whiteCellsBattleDisease();
    this.effects = this.effects.filter(effect => effect.duration > 0);
  }
  //OO
  //FIGHT!
  whiteCellsBattleDisease() {
    this.whiteCells.doBattle(this.bacteria);
    this.whiteCells.doBattle(this.viruses);
  }

  tCellsBattleViruses() {
    for (let tCell of this.tCells) {
      tCell.fightVirus(this.viruses);
    }
  }
  //TODO: cahnge to non-hard coded
  mucusFlushesDiseases(diseases: Disease[]) {
    for (let dis of diseases) {
      dis.Count = dis.Count * (1 - this.body.mucusProduction * 0.05);
    }
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
    console.log(this.tickCount / TicksPerDay);
    startDate.setTime(
      startDate.getTime() + (this.tickCount / TicksPerDay) * MillisecondsPerDay
    );
    return startDate.toLocaleString();
  }
}
