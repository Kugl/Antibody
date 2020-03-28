import { Card } from '../card';
import { Extravasation } from '../effects/extravasation';


export class ExtravasationCard extends Card {
  title = "Leukocytosis";
  pictureURL = "assets/pictures/extravasation.png";
  text = "Increase Leukocyte Mobilization x5.";
  effects = [new Extravasation()];
}
