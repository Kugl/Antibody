import { IncreaseTemperature } from "../effects/increaseTemperature";
import { Card } from "../card";

export function makeFeverCard() {
  let effects = [new IncreaseTemperature()];
  const card = new Card("Fever", "", "descr", effects);
  return card;
}
