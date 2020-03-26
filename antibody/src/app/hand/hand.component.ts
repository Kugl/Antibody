import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  cards = [1,2,3];

  constructor() {
   }

  ngOnInit(): void {
  }

}
