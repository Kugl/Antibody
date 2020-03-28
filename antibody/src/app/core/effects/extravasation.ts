import { Effect } from './effect';
import { Game } from '../game';
import { TicksPerDay } from '../constants';



export class Extravasation implements Effect {
  displayText = "Increase Leukocyte Mobilization Rate x5"
  action = ""
  duration = TicksPerDay * 1

  activate(game: Game) {
    game.body.defensePool.leukos.mobilizationRate *= 5
  }

  deactivate(game: Game) {
    game.body.defensePool.leukos.mobilizationRate /= 5
  }
}
