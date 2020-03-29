import { Card } from '../card';
import { IncreaseLeukosProduction } from '../effects/increaseLeukosProduction';
import { EffectFactory } from '../effects/effect'

export class LeukocytosisCard extends Card {
  title = "Leukocytosis";
  pictureURL = "assets/pictures/leukos.jpg";
  text = "Increase Leukocyte Production x5.";
  effectFactories = [new EffectFactory(IncreaseLeukosProduction)];
}
