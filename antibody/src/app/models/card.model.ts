export interface Effect{
  DisplayText: string;
  Action: string;
}


export class Card {
    id: number = 0;
    Title: string = "";
    PictureURL: string ="";
    Text: string ="";
    Effects: Effect[] =[];
  }
  