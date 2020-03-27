import { WhiteBloodcell, TCell } from "./immune-system/antibodys";
import { Disease, makeDiseaseArray } from "./diseases/diseases";
import { TicksPerDay } from "./constants"
import { DefensePool } from "./defense"
import { NewsTicker } from "./newsTicker";

export class Body {
  fever: boolean = false
  temperature: number = 37
  mucusProduction: number = 0

  diseases: Disease[];
  defensePool: DefensePool;
  mobilizationRate: number = 0.1; // fraction of defenses that can be mobilized per day

  newsTicker: NewsTicker;

  constructor() {
    this.diseases = makeDiseaseArray();
    this.defensePool = new DefensePool();
  }

  tick() {
    this.handleInfections()
    this.defensePool.grow()
    this.mobilize()
  }

  mobilize() {
    
  }

  handleInfections() {
    for (let disease of this.diseases) {
      if (disease.Count > 0) {
        disease.spread()
      } else {
        this.maybeGetInfected(disease)
      }
    }
  }


  maybeGetInfected(disease) {
      // +0.01 is for testing only, to have more frequent infections
    if (Math.random() < disease.ChanceOfInfection / TicksPerDay + 0.01) {
      disease.infect()
      this.newsTicker.publishNews("You have been infected with " + disease.Name);
    }
  }


}