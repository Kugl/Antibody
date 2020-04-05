import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { CentralService } from "../services/central.service";
import { Defender, DefensePool, MemoryTCells } from "../core/defense";
import { Game } from "../core/game";
import { Disease, Virus, Bacteria } from "../core/diseases/diseases";

import { TicksPerYear, TicksPerDay } from "../core/constants";
import { Body } from "../core/body";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit, AfterContentChecked {
  defenses: DefensePool;
  diseases: Disease[];
  currentGame: Game;
  body: Body;
  gameOver: boolean = false;
  //Counting a year per "day" as games would be very long otherwise
  ticksPerYear: number = TicksPerDay;

  constructor(private centServ: CentralService) {
    this.currentGame = this.centServ.getGame();
    this.body = this.currentGame.body;
    this.defenses = this.currentGame.body.defensePool;
    this.diseases = this.currentGame.body.diseases;
    console.log(this.defenses);
  }

  ngAfterContentChecked() {
    this.orderDeadly();
    if (this.body.isDead && this.gameOver == false) {
      this.gameOver = true;
      this.centServ.openGameOverDialog();
    }
  }

  isVirus(dis: Disease) {
    return dis instanceof Virus;
  }
  isBacteria(dis: Disease) {
    return dis instanceof Bacteria;
  }

  isTmemory(dis: Defender) {
    return dis instanceof MemoryTCells;
  }

  ngOnInit(): void {}

  orderDeadly() {
    if (this.diseases.length === 0) return;

    this.diseases.sort((a: Disease, b: Disease) => {
      if (a.Count * a.Deadliness < b.Count * b.Deadliness) {
        return 1;
      } else if (a.Count * a.Deadliness > b.Count * b.Deadliness) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
//keyboard_arrow_up
//arrow_upward
