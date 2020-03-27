import { Virus, Bacteria } from './diseases/diseases';

export class VirusInfection {
  disease: Virus;
  hostCells = 1;
  count = 1;
}

export class BacteriaInfection {
  disease: Bacteria;
  count = 1;
}