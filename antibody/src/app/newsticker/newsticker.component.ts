<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs'
import { NewsMessage } from '../core/newsTicker'
import { CentralService } from '../services/central.service';
=======
import { Component, OnInit } from "@angular/core";
import { interval, timer } from "rxjs";
import { CentralService } from "../services/central.service";
import { NewsMessage } from "../core/message";
>>>>>>> ee2bf1e77ca9e13605c762da3d6f4ff3991c1e1f

@Component({
  selector: "app-newsticker",
  templateUrl: "./newsticker.component.html",
  styleUrls: ["./newsticker.component.scss"]
})
export class NewstickerComponent implements OnInit {
  news: NewsMessage[] = [];

  readonly MINIMUM_OPCAITY = 0.3;
  readonly OPACITY_DECREASE_FACTOR = 10.0;

<<<<<<< HEAD
  constructor(centralService: CentralService){
    this.news = centralService.getGame().newsTicker.news;
   }

  ngOnInit(): void {
=======
  constructor(centralService: CentralService) {
    this.news = centralService.getGame().news;
>>>>>>> ee2bf1e77ca9e13605c762da3d6f4ff3991c1e1f
  }

  ngOnInit(): void {}

  max = Math.max;
}
