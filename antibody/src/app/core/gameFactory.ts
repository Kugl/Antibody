import { Game } from "./game";
import { Deck } from "./deck";
import { Card } from "./card";
import { Body } from "./body";
import { FeverCard } from "./cards/fever";
import { RunnyNoseCard } from "./cards/runnyNose";
import { LeukocytosisCard } from "./cards/leukocytosis";
import { ExtravasationCard } from "./cards/extravasation";
import { MobilizeTCellsCard } from "./cards/mobilizeTCells";
import { IncreaseTCellProdCard } from "./cards/increaseTCellProd";

const deckSpec = [
  //{ _class: FeverCard, count: 2 },
  { _class: RunnyNoseCard, count: 2 },
  { _class: LeukocytosisCard, count: 2 },
  { _class: ExtravasationCard, count: 2 },
  { _class: MobilizeTCellsCard, count: 2 },
  { _class: IncreaseTCellProdCard, count: 2 }
];

export function makeDefaultGame(): Game {
  const cards: Card[] = [];
  for (let spec of deckSpec) {
    for (let i = 0; i < spec.count; i++) [cards.push(new spec._class())];
  }
  const deck = new Deck(cards);
  const body = new Body();
  return new Game(deck, body);
}
