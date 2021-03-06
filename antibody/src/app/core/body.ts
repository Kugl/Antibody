import { WhiteBloodcell, TCell } from "./immune-system/antibodys";
import { Disease, makeDiseaseArray, Virus } from "./diseases/diseases";
import { TicksPerDay } from "./constants";
import { DefensePool, Defender } from "./defense";
import { NewsTicker } from "./newsTicker";
import { factorDay2Tick } from "./util";
import { Subject } from "rxjs";

export interface EventMessage {
  description: string;
  picture?: string;
  text: string;
}
export class Body {
  fever: boolean = false;
  temperature: number = 37;
  mucusProduction: number = 0;
  mobilizationTrigger: boolean = false;

  superDeadlyMode = false; // for testing -- increases infection spread

  BodyEventSubject = new Subject<EventMessage>();

  diseases: Disease[];
  defensePool: DefensePool;
  mobilizationRate: number = 0.2; // fraction of defenses that can be mobilized per day
  newsTicker: NewsTicker;

  totalDeadliness: number;

  maxEnergy = 100;
  energy: number;
  energyRate: number; // how much energy is recovered per day

  constructor() {
    this.diseases = makeDiseaseArray();
    this.defensePool = new DefensePool();
    this.energy = 100;
    this.energyRate = 100;
    this.totalDeadliness = 0;
  }

  tick() {
    this.defensePool.tick();
    this.handleInfections();
    this.mobilize();
    this.fightDiseases();
    this.increaseEnergy();
    this.updateHealth();
  }

  updateHealth() {
    let deadliness = 0;
    for (let disease of this.diseases) {
      deadliness += (disease.Deadliness * disease.Count) / 2000;
    }
    this.totalDeadliness = deadliness;
  }

  get health() {
    return 100 - this.totalDeadliness;
  }

  get isDead() {
    return this.health <= 0;
  }

  increaseEnergy() {
    this.energy = Math.min(
      this.maxEnergy,
      this.energy + this.energyRate / TicksPerDay
    );
  }

  mobilize() {
    //Changed Mobilization to have a Trigger.
    if (this.mobilizationTrigger) {
      for (let disease of this.diseases) {
        for (let defender of disease.defenders) {
          for (let poolDefender of this.defensePool.defenders) {
            if (defender.name === poolDefender.name) {
              poolDefender.mobilize(defender);
            }
          }
        }
      }
    }
  }

  //Moves defendres backto the pool once the disease is defeated
  demobilize(disease: Disease) {
    for (let defender of disease.defenders) {
      for (let poolDefender of this.defensePool.defenders) {
        if (defender.name === poolDefender.name) {
          const transfer = defender.count;
          defender.count -= transfer;
          poolDefender.count += transfer;
        }
      }
    }
    if (disease instanceof Virus) {
      this.defensePool.demobilizeMemTCells(disease);
      disease.memTCells.count = 0;
    }
  }

  handleInfections() {
    for (let disease of this.diseases) {
      if (disease.Count >= 1) {
        const spreadFactor = this.superDeadlyMode ? 100 : 1;
        disease.spread(spreadFactor);
      } else {
        this.demobilize(disease);
        this.maybeGetInfected(disease);
      }
      for (let defender of disease.defenders) {
        defender.tickInit();
      }
    }
  }

  maybeGetInfected(disease) {
    // +0.01 is for testing only, to have more frequent infections
    //removed additional infection chance
    if (
      Math.random() < disease.ChanceOfInfection / TicksPerDay ||
      this.superDeadlyMode
    ) {
      disease.infect();
      let message = "You have been infected with " + disease.Name;
      let messageText =
        "You have been infected with " +
        disease.Name +
        "! Strengthen the growth of Antibodys by playing cards and mobilize defenders to the area of infection";
      this.newsTicker.publishNews(message);
      this.BodyEventSubject.next({
        description: message,
        picture: "",
        text: messageText,
      });
    }
  }

  //Goes through all diseases. If defenders are present each defender fights once.
  fightDiseases() {
    for (let disease of this.diseases) {
      if (disease.Count > 0) {
        //Antibodys
        if (disease.defenders.length > 0) {
          for (let defender of disease.defenders) {
            defender.fight(disease);
          }
        }
        //Bodily functions
        this.mucusJettison(disease);
      }
    }
  }

  mucusJettison(disease: Disease) {
    for (let i = 0; i < this.mucusProduction; i++) {
      disease.Count = disease.Count * 0.998;
    }
  }
}
