import { Effect } from '../core/effects/effect';

export class Card {
    id: number = 0;
    Title: string = "";
    PictureURL: string ="";
    Text: string ="";
    Effects: Effect[] =[];
  }
  