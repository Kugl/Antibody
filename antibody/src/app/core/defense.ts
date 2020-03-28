import { factorDay2Tick, linearRateDay2Tick } from "./util";
import { Disease } from "./diseases/diseases";

export class Defender {
  name: string;
  count: number;
  production: number;
  decay: number;
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
}

export class Macrophages extends Defender {
  name = "Macrophages";
  count = 0;
  production = 1;
  decay = 0.01;
  //Fraction of Tcells that kil la virus on a day.
  combatPower: number = 0.1;
}

export class DefensePool {
  defenders: Defender[] = [new TCells(), new Leukos(), new Macrophages()];

  grow() {
    for (let defender of this.defenders) {
      defender.grow();
    }
  }
}
