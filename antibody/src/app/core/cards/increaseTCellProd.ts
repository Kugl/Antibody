import { Card } from "../card";
import { EffectFactory } from "../effects/effect";
import { IncreaseDefenderProduction } from "../effects/increaseDefenderProduction";

export class IncreaseTCellProdCard extends Card {
  title = "Increase TCell Production";
  pictureURL = "assets/pictures/cards/lymphocytes.jpg";
  text = "Increase TCell Production x5.";
  effectFactories = [
    new EffectFactory(IncreaseDefenderProduction, ["tCells", "T-Cells"]),
  ];
  energyCost = 30;
}
