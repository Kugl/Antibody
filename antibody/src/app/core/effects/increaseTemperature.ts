import { Effect } from './effect'
import { Game } from '../game'

export class IncreaseTemperature implements Effect {
  displayText = "Increase Temperature"
  action = ""
  duration = 20

  activate(game: Game) {
    game.body.temperature += 1
  }

  deactivate(game: Game) {
    game.body.temperature -= 1
  }
}
