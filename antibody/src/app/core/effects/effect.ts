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
  constructor(private effectClass: any, private args?: string[]) {
    this.effectClass = effectClass;
  }

  make() {
    return new this.effectClass(...this.args);
  }
}
