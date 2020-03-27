import { Disease } from "../diseases/diseases";

//Immune cells die while fighting viruses. New cells can only be generated by using cards
export interface ImmuneCell {
  Lifetime: number;
  Count: number;
  MaxCount: number;
}

//General purpose immune cell. Effective against everything. But less so against viruses because of the sheer number
export interface WhiteBloodcell extends ImmuneCell {}

//Specific T Killer Cell. Very effective but can only target one disease
export interface TCell extends ImmuneCell {
  TargetDisease: string;
  //While only alive for a short time a fraction of the cells goes dormant and can be awoken per card if the disease reappears
  MemoryTime: number;
  //Once a disease is detected and a Breed T-Cells card is plaed it takes a while until the cells are formed.
  BreedingTime: number;
}

export class WhiteBloodcell implements WhiteBloodcell {
  //Lifetime in days
  Lifetime: number = 3;
  Count: number = 5000;
  //Upper limit for Balancing reasons
  MaxCount: number = 500000;

  doBattle(disease: Disease[]) {
    //Can only fight if tehre are at least 1000
    if (this.Count > 1000) {
      let strength = this.Count * 0.1;
      for (let dis of disease) {
        let initialCount = dis.Count;
        dis.Count = dis.Count - strength;
        if (dis.Count < 0) {
          dis.Count = 0;
        }
        //For each killed Virus/Bacteria a white cell has to die
        this.Count = this.Count - (initialCount - this.Count);
      }
    }
  }
}

export class TCell implements TCell {
  //Lifetime in days
  Lifetime: number = 14;
  Count: number = 0;
  MaxCount: number = 1000000;
  TargetDisease: string = "";
  MemoryTime: number = 730;
  //In days
  BreedingTime: number = 4;
}
