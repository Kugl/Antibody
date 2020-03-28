import { Effect } from "./effect";
import { Game } from "../game";

export class MucusProduction implements Effect {
  displayText = "Increase Mucus Production";
  action = "";
  duration = 100;
  readonly maxDuration = 100;

  activate(game: Game) {
    game.body.mucusProduction += 1;
  }

  deactivate(game: Game) {
    game.body.mucusProduction -= 1;
  }
}
