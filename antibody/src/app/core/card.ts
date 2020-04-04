import { EffectFactory } from "./effects/effect";

export class Card {
  title: string = "";
  pictureURL: string = "";
  text: string = "";
  effectFactories: EffectFactory[] = [];
  energyCost: number;

  constructor(
    title?: string,
    pictureURL?: string,
    text?: string,
    effectFactories?: EffectFactory[],
    energyCost?: number
  ) {
    this.title = title;
    this.pictureURL = pictureURL;
    this.text = text;
    this.effectFactories = effectFactories;
    this.energyCost = energyCost;
  }
}
