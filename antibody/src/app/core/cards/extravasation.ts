import { Card } from "../card";
import { EffectFactory } from "../effects/effect";
import { MobilizeEffect } from "../effects/mobilize-effect";

export class ExtravasationCard extends Card {
  title = "Extravasation";
  pictureURL = "assets/pictures/extravasation.png";
  text = "Mobilize defenders to fight diseases with a focus on Leukocytes";
  effectFactories = [new EffectFactory(MobilizeEffect, ["tCells", "T-Cell"])];
}
