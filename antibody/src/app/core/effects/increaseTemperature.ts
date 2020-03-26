import { Effect } from './effect'
import { Game } from '../game'

export class IncreaseTemperature implements Effect {
  displayText = "Increase Temperature"
  action = ""
  duration = 20

  apply(game: Game) {
    game.body.fever = true
  }

  deactivate(game: Game) {
    game.body.fever = false
  }
}
