import { Card } from "../card";
import { MobilizeEffect } from "../effects/mobilize-effect";
import { EffectFactory } from "../effects/effect";

export class MobilizeTCellsCard extends Card {
  title = "Mobilize TCells";
  pictureURL = "assets/pictures/cards/lymphomob.jpg";
  text = "Mobilize defenders to fight diseases with a focus on TCells";
  effectFactories = [new EffectFactory(MobilizeEffect, ["tCells", "T-Cell"])];
}
