import { Effect } from "./effect";
import { Game } from "../game";
import { TicksPerDay } from "../constants";

export class IncreaseDefenderProduction implements Effect {
  displayText = "Increase" + this.targetDefenderName + "Production x5";
  action = "";
  duration = TicksPerDay * 1;
  readonly maxDuration = TicksPerDay * 1;

  constructor(
    private targetDefender: string,
    private targetDefenderName: string
  ) {}

  activate(game: Game) {
    game.body.defensePool[this.targetDefender].production *= 5;
  }

  deactivate(game: Game) {
    game.body.defensePool[this.targetDefender].production /= 5;
  }
}
