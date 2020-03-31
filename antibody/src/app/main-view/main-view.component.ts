import {
  Component,
  OnInit,
  Pipe,
  OnChanges,
  AfterContentChecked
} from "@angular/core";
import { CentralService } from "../services/central.service";
import { Defender, DefensePool } from "../core/defense";
import { Game } from "../core/game";
import { Disease, Virus, Bacteria } from "../core/diseases/diseases";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"]
})
export class MainViewComponent implements OnInit, AfterContentChecked {
  defenses: DefensePool;
  diseases: Disease[];
  currentGame: Game;
  totalDeadliness: number = 0;
  health: number = 100;

  constructor(private centServ: CentralService) {
    this.currentGame = this.centServ.getGame();
    this.defenses = this.currentGame.body.defensePool;
    this.diseases = this.currentGame.body.diseases;
    console.log(this.defenses);
  }

  ngAfterContentChecked() {
    this.sumDeadliness();
    this.health = 100 - this.totalDeadliness;
  }

  sumDeadliness() {
    this.totalDeadliness = 0;
    for (let disease of this.diseases) {
      this.totalDeadliness += (disease.Deadliness * disease.Count) / 2000;
    }
  }

  isVirus(dis: Disease) {
    return dis instanceof Virus;
  }
  isBacteria(dis: Disease) {
    return dis instanceof Bacteria;
  }

  ngOnInit(): void {}
}
