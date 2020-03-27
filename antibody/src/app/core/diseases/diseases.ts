export interface Disease {
  Name: string;
  Count: number;
  //How long is the body immune after infection [days]
  ImmunityPeriod: number;
  //Chance to be infected in Percent per Day
  ChanceOfInfection: number;
  HostMaxAge: number;
  HostMinAge: number;
  Deadliness: number;
}
// 10 Virus infect one host cell. This cell start then producing viruses until it is destroyed
export interface Virus extends Disease {
  //Number of viruses produced by an active Host per day
  NumberPerHostCell: number;
}

//Bacteria Devide and double the number after a Time x
export interface Bacteria extends Disease {
  TimeToDoubleCount: number;
}

// TODO: consider implementing diseases as instances? Might be easier to handle. Let's see.

export class Influenza implements Virus {
  Name = "Influenza";
  Count = 100;
  ImmunityPeriod = 365;
  ChanceOfInfection = 1;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 5;
  NumberPerHostCell = 500;
}

export class Measels implements Virus {
  Name = "Measels";
  Count = 100;
  ImmunityPeriod = 999999999999999999999999;
  ChanceOfInfection = 3;
  HostMaxAge = 16;
  HostMinAge = 0;
  Deadliness = 5;
  NumberPerHostCell = 500;
}

export class Corona implements Virus {
  Name = "Corona";
  Count = 100;
  ImmunityPeriod = 450;
  ChanceOfInfection = 1;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 7;
  NumberPerHostCell = 500;
}

export class CommonCold implements Bacteria {
  Name = "CommonCold";
  Count = 1000;
  ImmunityPeriod = 0;
  ChanceOfInfection = 5;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 1;
  TimeToDoubleCount = 1;
}

export class Pneumonia implements Bacteria {
  Name = "Pneumonia";
  Count = 1000;
  ImmunityPeriod = 0;
  ChanceOfInfection = 1;
  HostMaxAge = 999;
  HostMinAge = 65;
  Deadliness = 9;
  TimeToDoubleCount = 1;
}

export class Tuberculosis implements Bacteria {
  Name = "Tuberculosis";
  Count = 1000;
  ImmunityPeriod = 0;
  ChanceOfInfection = 0.5;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 9;
  TimeToDoubleCount = 1;
}

export function makeVirusArray() {
  // TODO: add more diseases from above -- but 2 or 3 is enough for prototype
  return [new Influenza(), new Corona()];
}

export function makeBacteriaArray() {
  return [new CommonCold()];
}

//1 TCell can Neutralzie 1 Virus
//1 White Cell can neutralize 1 virushost or 1 Bacteria
