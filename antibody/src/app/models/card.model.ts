export interface Effect{
  DisplayText: string;
  Action: string;
}


export class Card {
    Title: string = "";
    PictureURL: string ="";
    Text: string ="";
    Effects: Effect[] =[];
  }
  