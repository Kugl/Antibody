import { factorDay2Tick, linearRateDay2Tick } from "./util";
import { Disease } from "./diseases/diseases";
import { TicksPerDay } from "./constants";

export class Defender {
  name: string;
  count: number;
  production: number;
  decay: number;
  mobilizationRate: number = 0.2;
  //Fraction of Tcells that kil la virus on a day.
  combatPower: number;

  grow() {
    const tickSurvival = factorDay2Tick(1.0 - this.decay);
    const tickProduction = linearRateDay2Tick(this.production);
    this.count = this.count * tickSurvival + tickProduction;
  }
  //TODO: Adapt to accopunt for different fighting styles
  fight(disease: Disease): void {
    let strength = this.count * this.combatPower;
    //Specific Tcells only fight the virus they are build for
    disease.Count = disease.Count - strength;
    if (disease.Count < 0) {
      disease.Count = 0;
    }
  }
}

export class TCells extends Defender {
  name = "T-Cells";
  count = 0;
  production = 50;
  decay = 0.1;
  //Fraction of Tcells that kil la virus on a day.
  combatPower: number = 0.1;
}

export class Leukos extends Defender {
  name = "Leukocytes";
  count = 0;
  production = 200;
  decay = 0.05;
  //Fraction of Tcells that kil la virus on a day.
  combatPower: number = 0.1;
  //TODO: Macrophage method for testing. How do Leukos fight? This needs to be removed
  //Copied and adapted from antibody file
  fight(disease: Disease): void {
    //Due to rounding issues the common colds last bacteria is immortal. Unelegant fix.
    if (disease.Count < 5) {
      disease.Count = 0;
      return;
    }
    //I just learned that Javascript does not throw an error when you make it divide by 0 :-)
    if (this.count > 0) {
      //Changed as it was causing negative numbers
      const fightingProbability = (disease.Count + this.count) / 10000;
      const strength = this.count * fightingProbability;
      let initialCount = disease.Count;
      disease.Count = disease.Count - strength;
      if (disease.Count < 0) {
        disease.Count = 0;
      }
      //For each 100 killed Virus/Bacteria a white cell has to die
      const killed = (initialCount - disease.Count) / 100;
      this.count = this.count - killed;
    }
  }
}

export class Macrophages extends Defender {
  name = "Macrophages";
  count = 0;
  production = 1;
  decay = 0.01;
  //Fraction of Tcells that kil la virus on a day.
  combatPower: number = 0.1;
  //Copied and adapted from antibody file
  fight(disease: Disease): void {
    //Due to rounding issues the common colds last bacteria is immortal. Unelegant fix.
    if (disease.Count < 5) {
      disease.Count = 0;
      return;
    }
    //I just learned that Javascript does not throw an error when you make it divide by 0 :-)
    if (this.count > 0) {
      //Changed as it was causing negative numbers
      const fightingProbability = (disease.Count + this.count) / 10000;
      const strength = this.count * fightingProbability;
      let initialCount = disease.Count;
      disease.Count = disease.Count - strength;
      if (disease.Count < 0) {
        disease.Count = 0;
      }
      //For each 100 killed Virus/Bacteria a white cell has to die
      const killed = (initialCount - disease.Count) / 100;
      this.count = this.count - killed;
    }
  }
}

export class DefensePool {
  defenders: Defender[];
  tCells: TCells;
  leukos: Leukos;
  macros: Macrophages;

  constructor() {
    this.tCells = new TCells();
    this.leukos = new Leukos();
    this.macros = new Macrophages();
    this.defenders = [this.tCells, this.leukos, this.macros];
  }

  grow() {
    for (let defender of this.defenders) {
      defender.grow();
    }
  }
}
