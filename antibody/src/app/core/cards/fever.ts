import { IncreaseTemperature } from "../effects/increaseTemperature";
import { Card } from "../card";

export function makeFeverCard() {
  let effects = [new IncreaseTemperature()];
  const card = new Card(
    "Fever",
    "assets/pictures/corona.jpg",
    "Increase body temperature.",
    effects
  );
  return card;
}

//Proposal: Different Syntax for cards based on my work on the disease definition

export class DummyFeverCard implements Card {
  title = "Fever";
  pictureURL = "assets/pictures/corona.jpg";
  text = "This is teh Cards text";
  effects = [new IncreaseTemperature()];
}

//Should work, as we do not change the cards dynamically. Although we can if need be.
// can be called with new DummyFeverCard().
//I like this a bit better for readability. Please comment
