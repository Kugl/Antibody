import { EffectFactory } from "./effects/effect";

export class Card {
  title: string = "";
  pictureURL: string = "";
  text: string = "";
  effectFactories: EffectFactory[] = [];

  constructor(
    title?: string,
    pictureURL?: string,
    text?: string,
    effectFactories?: EffectFactory[]
  ) {
    this.title = title;
    this.pictureURL = pictureURL;
    this.text = text;
    this.effectFactories = effectFactories;
  }
}
