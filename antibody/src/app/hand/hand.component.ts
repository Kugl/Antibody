import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';




@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  cards: Card[] = [];

  constructor() {
    //for tetsing only
    let card: Card = {
      id: 4,
      Title: "Number One",
      PictureURL: "assets/pictures/corona.jpg",
      Text: "The text of card one",
      Effects : [] 
    };
    let card2: Card = {
      id: 5,
      Title: "Number Two",
      PictureURL: "assets/pictures/corona.jpg",
      Text: "The text of card two",
      Effects : [] 
    };
    let card3: Card = {
      id: 6,
      Title: "Number Three",
      PictureURL: "assets/pictures/corona.jpg",
      Text: "The text of card three",
      Effects : [] 
    };
    this.cards.push(card);
    this.cards.push(card2);
    this.cards.push(card3);
   }

  ngOnInit(): void {
  }

  drawCard(){
    //get card from Deck
    //REMOVE later:
    let card: Card = {
      id: 4,
      Title: "Number Four",
      PictureURL: "assets/pictures/corona.jpg",
      Text: "The text of card four",
      Effects : [] 
    };
    this.cards.push(card);
  }

  playCard(id: number){
    //trigger effects

    //discard
    this.discardCard(id);
  }

  discardCard(id: number){
    this.cards = this.cards.filter(function( obj ) {
      return obj.id !== id;
  });
  }

}
