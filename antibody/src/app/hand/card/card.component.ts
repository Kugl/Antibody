import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Card } from 'src/app/core/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
@Input() card: Card;
  emptycard = new Card();

  constructor() {
    //Nur zum testen
    this.card = this.emptycard;
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void{

  }

}
