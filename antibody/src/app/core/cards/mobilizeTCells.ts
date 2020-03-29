import { Card } from "../card";
import { MobilizeEffect } from "../effects/mobilize-effect";

export class MobilizeTCellsCard extends Card {
  title = "Mobilize TCells";
  pictureURL = "assets/pictures/cards/lymphocytes.jpg";
  text = "Increase TCell Mobilization x5.";
  effectFactories = [new EffectFactory(MobilizeEffect("tCells", "T-Cell"))];
  //effects = [new MobilizeEffect("tCells", "T-Cell")];
}
