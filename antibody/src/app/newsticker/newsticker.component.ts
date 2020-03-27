import { Component, OnInit } from "@angular/core";
import { interval, timer } from "rxjs";
import { CentralService } from "../services/central.service";
import { NewsMessage } from "../core/message";

@Component({
  selector: "app-newsticker",
  templateUrl: "./newsticker.component.html",
  styleUrls: ["./newsticker.component.scss"]
})
export class NewstickerComponent implements OnInit {
  news: NewsMessage[] = [];

  readonly MINIMUM_OPCAITY = 0.3;
  readonly OPACITY_DECREASE_FACTOR = 10.0;

  constructor(centralService: CentralService) {
    this.news = centralService.getGame().news;
  }

  ngOnInit(): void {}

  max = Math.max;
}
