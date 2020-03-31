import { Effect } from "./effect";
import { Game } from "../game";
import { TicksPerDay } from "../constants";

export class MobilizeEffect implements Effect {
  displayText = "Increase" + this.targetDefenderName + "Mobilization Rate x5";
  action = "";
  duration = TicksPerDay * 1;
  readonly maxDuration = TicksPerDay * 1;

  constructor(
    private targetDefender: string,
    private targetDefenderName: string
  ) {}

  activate(game: Game) {
    game.body.defensePool[this.targetDefender].mobilizationRate *= 5;
    game.body.mobilizationTrigger = true;
  }

  deactivate(game: Game) {
    game.body.defensePool[this.targetDefender].mobilizationRate /= 5;
    game.body.mobilizationTrigger = false;
  }
}
