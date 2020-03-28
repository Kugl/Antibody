import { Card } from '../card';
import { Extravasation } from '../effects/extravasation';


export class ExtravasationCard extends Card {
  title = "Extravasation";
  pictureURL = "assets/pictures/extravasation.png";
  text = "Increase Leukocyte Mobilization x5.";
  effects = [new Extravasation()];
}
