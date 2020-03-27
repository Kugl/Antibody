import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs'
import { NewsMessage } from '../core/newsTicker'
import { CentralService } from '../services/central.service';

@Component({
  selector: "app-newsticker",
  templateUrl: "./newsticker.component.html",
  styleUrls: ["./newsticker.component.scss"]
})
export class NewstickerComponent implements OnInit {
  news: NewsMessage[] = [];

  readonly MINIMUM_OPCAITY = 0.3;
  readonly OPACITY_DECREASE_FACTOR = 10.0;

  constructor(centralService: CentralService){
    this.news = centralService.getGame().newsTicker.news;
   }

  ngOnInit(): void {
  }


  max = Math.max;
}
