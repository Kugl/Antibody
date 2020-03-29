import { Card } from '../card';
import { Extravasation } from '../effects/extravasation';
import { EffectFactory } from '../effects/effect';


export class ExtravasationCard extends Card {
  title = "Extravasation";
  pictureURL = "assets/pictures/extravasation.png";
  text = "Increase Leukocyte Mobilization x5.";
  effectFactories = [new EffectFactory(Extravasation)];
}
