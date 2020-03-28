import { Card } from '../card';
import { IncreaseLeukosProduction } from '../effects/increaseLeukosProduction';


export class LeukocytosisCard extends Card {
  title = "Leukocytosis";
  pictureURL = "assets/pictures/leukos.jpg";
  text = "Increase Leucocyte Production x5.";
  effects = [new IncreaseLeukosProduction()];
}
