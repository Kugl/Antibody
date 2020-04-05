import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { CentralService } from "../services/central.service";
import { Defender, DefensePool, MemoryTCells } from "../core/defense";
import { Game } from "../core/game";
import { Disease, Virus, Bacteria } from "../core/diseases/diseases";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit, AfterContentChecked {
  defenses: DefensePool;
  diseases: Disease[];
  currentGame: Game;
  totalDeadliness: number = 0;
  health: number = 100;
  gameOver: boolean = false;

  constructor(
    private centServ: CentralService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.currentGame = this.centServ.getGame();
    this.defenses = this.currentGame.body.defensePool;
    this.diseases = this.currentGame.body.diseases;
    console.log(this.defenses);
    //Include custom Icons
    //TODO: Refactor into Icon component
    this.matIconRegistry.addSvgIcon(
      "cust_up",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow-24px.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_up_2x",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_up-24px2.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_up_3x",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_up-24px3.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_down",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_down-24px.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_down_2x",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_down-24px2.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "cust_down_3x",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/keyboard_arrow_down-24px3.svg"
      )
    );
  }

  ngAfterContentChecked() {
    this.sumDeadliness();
    //TODO: Refactor t oa place where istsorts less often
    this.orderDeadly();
    this.health = 100 - this.totalDeadliness;
    if (this.totalDeadliness > 100 && this.gameOver == false) {
      this.gameOver = true;
      this.centServ.openGameOverDialog();
    }
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
