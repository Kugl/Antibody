import { IncreaseTemperature } from "../effects/increaseTemperature";
import { Card } from "../card";

export class FeverCard extends Card {
  title = "Fever";
  pictureURL = "assets/pictures/corona.jpg";
  text = "Increase body temperature."
  effects = [new IncreaseTemperature()];
}
