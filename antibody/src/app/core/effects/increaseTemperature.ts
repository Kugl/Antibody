import { Effect } from "./effect";
import { Game } from "../game";
import { TicksPerDay } from "../constants";

export class IncreaseTemperature implements Effect {
  displayText = "Increase Temperature";
  action = "";
  duration = TicksPerDay * 1;
  readonly maxDuration = TicksPerDay * 1;

  activate(game: Game) {
    game.body.temperature += 1;
  }

  deactivate(game: Game) {
    game.body.temperature -= 1;
  }
}
