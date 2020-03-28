import { Component, OnInit } from "@angular/core";
import { CentralService } from "src/app/services/central.service";
import { Game } from "src/app/core/game";
import { Effect } from "src/app/core/effects/effect";
import { Subscription } from "rxjs";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})
export class StatusComponent implements OnInit {
  currentGame: Game;
  effects: Effect[];
  private sub: Subscription;

  constructor(private centServ: CentralService) {
    this.currentGame = this.centServ.getGame();

    this.sub = this.centServ.CardSubject.subscribe(event => {
      if (event.Action == "Play") {
        this.effects = this.currentGame.effects;
      }
    });
  }

  ngOnInit(): void {}
}
