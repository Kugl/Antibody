import { MucusProduction } from "../effects/mucusProduction";
import { Card } from "../card";

export function makeRunnyNoseCard() {
  let effects = [new MucusProduction()];
  const card = new Card(
    "Runny Nose",
    "assets/pictures/tissues.jpg",
    "Expel viruses via mucus.",
    effects
  );
  return card;
}
