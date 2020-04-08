import { TicksPerDay } from "../constants";
import { Defender, TCells, Leukos, MemoryTCells } from "../defense";

export class Disease {
  Name: string;
  Count: number;
  //How long is the body immune after infection [days]
  ImmunityPeriod: number;
  //Chance to be infected in Percent per Day
  ChanceOfInfection: number;
  HostMaxAge: number;
  HostMinAge: number;
  Deadliness: number;

  defeatedCount = 0;

  defenders: Defender[] = [];

  memTCells: MemoryTCells; // placeholder

  die(count: number) {
    this.Count -= count;
    this.defeatedCount += count;
  }

  spread(spreadFactor: number) {}
  infect() {
    this.Count = 3000;
  }

  toString(): string {
    return this.Name + ": " + this.Count;
  }
}
// 10 Virus infect one host cell. This cell start then producing viruses until it is destroyed
export class Virus extends Disease {
  //Number of viruses produced by an active Host per day
  NumberPerHostCell: number;
  HostCells: number = 0;
  defenders: Defender[] = [new TCells(), new Leukos()];
  memTCells: MemoryTCells;

  infect() {
    this.Count = 2000;
    this.HostCells = 20;
  }

  spread(spreadFactor: number) {
    this.Count +=
      (spreadFactor * (this.NumberPerHostCell * this.HostCells)) / TicksPerDay;
  }

  toString(): string {
    return (
      this.Name + ": " + this.Count + " (" + this.HostCells + " host cells.)"
    );
  }
}

//Bacteria Devide and double the number after a Time x
export class Bacteria extends Disease {
  GrowthPerDay: number;

  defenders: Defender[] = [new Leukos()];

  spread(spreadFactor: number) {
    this.Count *= Math.pow(this.GrowthPerDay * spreadFactor, 1 / TicksPerDay);
  }
}

// TODO: consider implementing diseases as instances? Might be easier to handle. Let's see.

export class Influenza extends Virus {
  Name = "Influenza";
  Count = 0;
  ImmunityPeriod = 365;
  ChanceOfInfection = 0.1;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 5;
  NumberPerHostCell = 500;
  pictureURL = "assets/pictures/flu.png";

  constructor() {
    super();
    this.memTCells = new MemoryTCells(this);
    this.defenders.push(this.memTCells);
  }
}

export class Measels extends Virus {
  Name = "Measels";
  Count = 0;
  ImmunityPeriod = 999999999999999999999999;
  ChanceOfInfection = 3;
  HostMaxAge = 16;
  HostMinAge = 0;
  Deadliness = 5;
  NumberPerHostCell = 500;

  constructor() {
    super();
    this.memTCells = new MemoryTCells(this);
    this.defenders.push(this.memTCells);
  }
}

export class Corona extends Virus {
  Name = "Corona";
  Count = 0;
  ImmunityPeriod = 450;
  ChanceOfInfection = 0.1;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 7;
  NumberPerHostCell = 500;
  pictureURL = "assets/pictures/corona.png";

  constructor() {
    super();
    this.memTCells = new MemoryTCells(this);
    this.defenders.push(this.memTCells);
  }
}

export class CommonCold extends Bacteria {
  Name = "CommonCold";
  Count = 0;
  ImmunityPeriod = 0;
  ChanceOfInfection = 0.5;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 1;
  GrowthPerDay = 2;
  pictureURL = "assets/pictures/bacteria.png";
}

export class Pneumonia extends Bacteria {
  Name = "Pneumonia";
  Count = 0;
  ImmunityPeriod = 0;
  ChanceOfInfection = 1;
  HostMaxAge = 999;
  HostMinAge = 65;
  Deadliness = 9;
  GrowthPerDay = 2;
}

export class Tuberculosis extends Bacteria {
  Name = "Tuberculosis";
  Count = 0;
  ImmunityPeriod = 0;
  ChanceOfInfection = 0.5;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 9;
  GrowthPerDay = 2;
}

export function makeVirusArray() {
  // TODO: add more diseases from above -- but 2 or 3 is enough for prototype
  return [new Influenza(), new Corona()];
}

export function makeBacteriaArray() {
  return [new CommonCold()];
}

export function makeDiseaseArray() {
  return [new CommonCold(), new Influenza(), new Corona()];
}

//1 TCell can Neutralzie 1 Virus
//1 White Cell can neutralize 1 virushost or 1 Bacteria
