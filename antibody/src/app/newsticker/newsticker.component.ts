import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs'
import { NewsMessage } from '../core/newsMessage'
import { CentralService } from '../services/central.service';

@Component({
  selector: 'app-newsticker',
  templateUrl: './newsticker.component.html',
  styleUrls: ['./newsticker.component.scss']
})
export class NewstickerComponent implements OnInit {
  news: NewsMessage[] = []

  constructor(centralService: CentralService){
    this.news = centralService.getGame().news;
   }

  ngOnInit(): void {
  }

}
