import { Effect } from './effect';
import { Game } from '../game';
import { TicksPerDay } from '../constants';



export class IncreaseLeukosProduction implements Effect {
  displayText = "Increase Leukocyte Production x5"
  action = ""
  duration = TicksPerDay * 1

  activate(game: Game) {
    game.body.defensePool.leukos.production *= 5
  }

  deactivate(game: Game) {
    game.body.defensePool.leukos.production /= 5
  }
}
