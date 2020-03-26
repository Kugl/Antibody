import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  card = new Card();

  constructor() {
    //Nur zum testen
    this.card.Title = "The Card";
    //this.card.PictureURL ="https://i.ytimg.com/vi/6OBnOOVSVXo/maxresdefault.jpg";
    this.card.PictureURL ="assets/pictures/corona.jpg";
    this.card.Text = "This is the Text";

   }

  ngOnInit(): void {
  }

}
