import { Component, OnInit, Pipe } from "@angular/core";
import { CentralService } from "../services/central.service";
import { Defender, DefensePool } from "../core/defense";
import { Game } from "../core/game";
import { Disease } from "../core/diseases/diseases";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"]
})
export class MainViewComponent implements OnInit {
  defenses: DefensePool;
  diseases: Disease[];
  currentGame: Game;

  constructor(private centServ: CentralService) {
    this.currentGame = this.centServ.getGame();
    this.defenses = this.currentGame.body.defensePool;
    this.diseases = this.currentGame.body.diseases;
    console.log(this.defenses);
  }

  ngOnInit(): void {}
}
