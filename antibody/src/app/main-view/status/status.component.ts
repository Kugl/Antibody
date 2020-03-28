import { Component, OnInit, OnDestroy } from "@angular/core";
import { CentralService } from "src/app/services/central.service";
import { Game } from "src/app/core/game";
import { Effect } from "src/app/core/effects/effect";
import { Subscription } from "rxjs";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})
export class StatusComponent implements OnInit, OnDestroy {
  currentGame: Game;
  effects: Effect[];
  private sub: Subscription;

  constructor(private centServ: CentralService) {
    this.currentGame = this.centServ.getGame();
    this.sub = this.currentGame.EffectSubject.subscribe(event => {
      this.effects = this.currentGame.effects;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
