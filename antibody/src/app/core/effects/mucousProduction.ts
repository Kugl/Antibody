import { Effect } from './effect'
import { Game } from '../game'

export class MucousProduction implements Effect {
  displayText = "Increase Mucous Production"
  action = ""
  duration = 20

  activate(game: Game) {
    game.body.mucousProduction += 1
  }

  deactivate(game: Game) {
    game.body.mucousProduction -= 1
  }
}
