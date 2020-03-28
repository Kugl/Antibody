import { WhiteBloodcell, TCell } from "./immune-system/antibodys";
import { Disease, makeDiseaseArray } from "./diseases/diseases";
import { TicksPerDay } from "./constants";
import { DefensePool } from "./defense";
import { NewsTicker } from "./newsTicker";
import { factorDay2Tick } from "./util";

export class Body {
  fever: boolean = false;
  temperature: number = 37;
  mucusProduction: number = 0;

  diseases: Disease[];
  defensePool: DefensePool;
  mobilizationRate: number = 0.2; // fraction of defenses that can be mobilized per day

  newsTicker: NewsTicker;

  constructor() {
    this.diseases = makeDiseaseArray();
    this.defensePool = new DefensePool();
  }

  tick() {
    this.handleInfections();
    this.defensePool.grow();
    this.mobilize();
    this.fightDiseases();
  }

  mobilize() {
    const rate = 1.0 - factorDay2Tick(1.0 - this.mobilizationRate); // the subtrahend is what we want to keep per tick
    for (let disease of this.diseases) {
      if (disease.Count < 1) {
        continue;
      }
      for (let defender of disease.defenders) {
        for (let poolDefender of this.defensePool.defenders) {
          if (defender.name === poolDefender.name) {
            const transfer = rate * poolDefender.count;
            defender.count += transfer;
            poolDefender.count -= transfer;
          }
        }
      }
    }
  }

  handleInfections() {
    for (let disease of this.diseases) {
      if (disease.Count > 0) {
        disease.spread();
      } else {
        this.maybeGetInfected(disease);
      }
    }
  }

  maybeGetInfected(disease) {
    // +0.01 is for testing only, to have more frequent infections
    if (Math.random() < disease.ChanceOfInfection / TicksPerDay + 0.01) {
      disease.infect();
      this.newsTicker.publishNews(
        "You have been infected with " + disease.Name
      );
    }
  }

  //Goes through all diseases. If defenders are present each defender fights once.
  fightDiseases() {
    for (let disease of this.diseases) {
      if (disease.Count > 0) {
        if (disease.defenders.length > 0) {
          for (let defender of disease.defenders) {
            defender.fight(disease);
          }
        }
      }
    }
  }
}
