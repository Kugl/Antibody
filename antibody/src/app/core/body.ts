import { WhiteBloodcell, TCell } from "./immune-system/antibodys";
import { Virus, Bacteria, makeVirusArray, makeBacteriaArray } from "./diseases/diseases";
import { TicksPerDay } from "./constants"

export class Body {
  fever: boolean = false
  temperature: number = 37
  mucusProduction: number = 0

  viruses: Virus[];
  bacteria: Bacteria[];
  whiteCells: WhiteBloodcell;
  tCells: TCell[];

  constructor() {
    this.viruses = makeVirusArray();
    this.bacteria = makeBacteriaArray();
    this.whiteCells = new WhiteBloodcell();
    this.tCells = [];
  }

  tick(game) {
    for (let virus of this.viruses) {
      if (Math.random() < virus.ChanceOfInfection / TicksPerDay + 0.01) {
        // +0.01 is for testing only, to have more frequent infections
        game.publishNews("You have been infected with " + virus.Name);
      }
    }
    this.mucusFlushesDiseases()
    this.tCellsBattleViruses();
    this.whiteCellsBattleDisease();
  }

    //OO
  //FIGHT!
  whiteCellsBattleDisease() {
    this.whiteCells.doBattle(this.bacteria);
    this.whiteCells.doBattle(this.viruses);
  }

  tCellsBattleViruses() {
    for (let tCell of this.tCells) {
      tCell.fightVirus(this.viruses);
    }
  }
  //TODO: cahnge to non-hard coded
  mucusFlushesDiseases() {
    for (let dis of this.bacteria) {
      dis.Count = dis.Count * (1 - this.mucusProduction * 0.05);
    }
    for (let dis of this.viruses) {
      dis.Count = dis.Count * (1 - this.mucusProduction * 0.05);
    }
  }


}