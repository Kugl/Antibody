import { Card } from "../card";
import { EffectFactory } from "../effects/effect";
import { IncreaseDefenderProduction } from "../effects/increaseDefenderProduction";

export class LeukocytosisCard extends Card {
  title = "Leukocytosis";
  pictureURL = "assets/pictures/leukos.jpg";
  text = "Increase Leukocyte Production x5.";
  effectFactories = [
    new EffectFactory(IncreaseDefenderProduction, ["leukos", "Leukocyte"]),
  ];
  energyCost = 50;
}
