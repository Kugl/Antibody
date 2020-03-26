import { Effect } from './effects/effect'

export class Card {
  title: string = "";
  pictureURL: string ="";
  text: string ="";
  effects: Effect[] =[];

  constructor(title, pictureURL, text, effects) {
    this.title = title
    this.pictureURL = pictureURL
    this.text = text
    this.effects = effects
  }
}
