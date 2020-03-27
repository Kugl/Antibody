import { factorDay2Tick, linearRateDay2Tick } from './util';


export class Defender {
  name: string;
  count: number;
  production: number;
  decay: number;


  grow() {
    const tickSurvival = factorDay2Tick(1.0 - this.decay)
    const tickProduction = linearRateDay2Tick(this.production)
    this.count = this.count * tickSurvival + tickProduction
  }
}

export class TCells extends Defender {
  name = "T-Cells"
  count = 0;
  production = 50;
  decay = 0.1;
}

export class Leukos extends Defender {
  name = "Leukocytes"
  count = 0;
  production = 200;
  decay = 0.05;
}

export class Macrophages extends Defender {
  name = "Macrophages"
  count = 0;
  production = 1;
  decay = 0.01;
}

export class DefensePool {
  defenders: Defender[] = [new TCells(), new Leukos(), new Macrophages()]

  grow() {
    for(let defender of this.defenders) {
      defender.grow()
    }
  }

}