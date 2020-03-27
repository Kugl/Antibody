import { WhiteBloodcell, TCell } from "./immune-system/antibodys";
import { Disease, makeDiseaseArray } from "./diseases/diseases";
import { TicksPerDay } from "./constants"
import { Game } from './game';
import { NewsTicker } from './newsTicker';

export class Body {
  fever: boolean = false
  temperature: number = 37
  mucusProduction: number = 0

  diseases: Disease[];
  whiteCells: WhiteBloodcell;
  tCells: TCell[];

  newsTicker: NewsTicker;

  constructor() {
    this.diseases = makeDiseaseArray();
    this.whiteCells = new WhiteBloodcell();
    this.tCells = [];
  }

  tick() {
    for (let disease of this.diseases) {
      if (disease.Count > 0) {
        disease.spread()
      } else {
        this.maybeGetInfected(disease)
      }
    }
    this.mucusFlushesDiseases()
    //this.tCellsBattleViruses();
    this.whiteCellsBattleDisease();
  }


  maybeGetInfected(disease) {
      // +0.01 is for testing only, to have more frequent infections
    if (Math.random() < disease.ChanceOfInfection / TicksPerDay + 0.01) {
      disease.infect()
      this.newsTicker.publishNews("You have been infected with " + disease.Name);
    }
  }

    //OO
  //FIGHT!
  whiteCellsBattleDisease() {
    this.whiteCells.doBattle(this.diseases);
  }

  tCellsBattleViruses() {
    for (let tCell of this.tCells) {
      tCell.fight(this.diseases);
    }
  }
  //TODO: cahnge to non-hard coded
  mucusFlushesDiseases() {
    for (let dis of this.diseases) {
      dis.Count = dis.Count * (1 - this.mucusProduction * 0.05);
    }
  }


}