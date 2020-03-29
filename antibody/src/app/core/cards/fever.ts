import { IncreaseTemperature } from "../effects/increaseTemperature";
import { Card } from "../card";
import { EffectFactory } from '../effects/effect';

export class FeverCard extends Card {
  title = "Fever";
  pictureURL = "assets/pictures/corona.jpg";
  text = "Increase body temperature."
  effectFactories = [new EffectFactory(IncreaseTemperature)];
}
