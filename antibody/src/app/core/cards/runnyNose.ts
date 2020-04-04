import { MucusProduction } from "../effects/mucusProduction";
import { Card } from "../card";
import { EffectFactory } from "../effects/effect";

export class RunnyNoseCard extends Card {
  title = "Runny Nose";
  pictureURL = "assets/pictures/tissues_sm.jpg";
  text = "Expel viruses via mucus.";
  effectFactories = [new EffectFactory(MucusProduction)];
  energyCost = 20;
}
