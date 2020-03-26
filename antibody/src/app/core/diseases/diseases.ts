export interface Disease {
  InitialInfectionCount: number;
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

export class Influenza implements Virus {
  InitialInfectionCount = 100;
  ImmunityPeriod = 365;
  ChanceOfInfection = 1;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 5;
  NumberPerHostCell = 500;
}

export class Measels implements Virus {
  InitialInfectionCount = 100;
  ImmunityPeriod = 999999999999999999999999;
  ChanceOfInfection = 3;
  HostMaxAge = 16;
  HostMinAge = 0;
  Deadliness = 5;
  NumberPerHostCell = 500;
}

export class Corona implements Virus {
  InitialInfectionCount = 100;
  ImmunityPeriod = 450;
  ChanceOfInfection = 1;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 7;
  NumberPerHostCell = 500;
}

export class CommonCold implements Bacteria {
  InitialInfectionCount = 1000;
  ImmunityPeriod = 0;
  ChanceOfInfection = 5;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 1;
  TimeToDoubleCount = 1;
}

export class Pneumonia implements Bacteria {
  InitialInfectionCount = 1000;
  ImmunityPeriod = 0;
  ChanceOfInfection = 1;
  HostMaxAge = 999;
  HostMinAge = 65;
  Deadliness = 9;
  TimeToDoubleCount = 1;
}

export class Tuberculosis implements Bacteria {
  InitialInfectionCount = 1000;
  ImmunityPeriod = 0;
  ChanceOfInfection = 0.5;
  HostMaxAge = 999;
  HostMinAge = 0;
  Deadliness = 9;
  TimeToDoubleCount = 1;
}

//1 TCell can Neutralzie 1 Virus
//1 White Cell can neutralize 1 virushost or 1 Bacteria
