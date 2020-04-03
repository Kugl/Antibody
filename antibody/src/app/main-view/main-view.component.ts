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
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

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
//keyboard_arrow_up
//arrow_upward
