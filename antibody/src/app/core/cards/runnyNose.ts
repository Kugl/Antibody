import { MucousProduction } from "../effects/mucousProduction"
import { Card } from "../card";

export function makeRunnyNoseCard() {
  let effects = [new MucousProduction()];
  const card = new Card("Runny Nose", "assets/pictures/corona.jpg", "Expel viruses via mucus.", effects);
  return card;
}
