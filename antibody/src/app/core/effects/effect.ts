import { Game } from "../game";

export interface Effect {
  displayText: string;
  action: string;
  duration: number;
  readonly maxDuration: number;
  activate(game: Game): void;
  deactivate(game: Game): void;
}

export class EffectFactory {
  effectClass;

  constructor(effectClass) {
    this.effectClass = effectClass
  }

  make() {
    return new this.effectClass();
  }
}
