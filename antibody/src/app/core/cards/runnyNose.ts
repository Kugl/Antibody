import { MucusProduction } from "../effects/mucusProduction";
import { Card } from "../card";


export class RunnyNoseCard extends Card {
  title = "Runny Nose";
  pictureURL = "assets/pictures/tissues_sm.jpg";
  text = "Expel viruses via mucus."
  effects = [new MucusProduction()];
}
