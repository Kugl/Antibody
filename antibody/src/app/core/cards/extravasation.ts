import { Card } from "../card";
import { EffectFactory } from "../effects/effect";
import { MobilizeEffect } from "../effects/mobilize-effect";

export class ExtravasationCard extends Card {
  title = "Extravasation";
  pictureURL = "assets/pictures/extravasation.png";
  text = "Increase Leukocyte Mobilization x5.";
  effectFactories = [new EffectFactory(MobilizeEffect, ["tCells", "T-Cell"])];
}
