import { Game } from "../game";

export interface Effect {
  displayText: string;
  action: string;
  duration: number;
  readonly maxDuration: number;
  activate(game: Game): void;
  deactivate(game: Game): void;
}

//reworked it but do not like the fact, that the called constructor needs to be chaecked manually
export class EffectFactory {
  constructor(private effectClass: any, private args?: string[]) {
    this.effectClass = effectClass;
  }

  make() {
    if (typeof this.args !== "undefined") {
      return new this.effectClass(...this.args);
    } else {
      return new this.effectClass();
    }
  }
}
