import { Injectable } from '@angular/core';
import { makeDefaultGame } from '../core/gameFactory'
import { Game } from '../core/game'

@Injectable({ providedIn: "root" })
export class CentralService {

  game: Game

  constructor() {
    this.game = makeDefaultGame()
    // Game loop below
    // TODO: proper timing logic -- simple interval will lead to variable game speeds
    let that = this
    setInterval(function() {
      that.game.tick();
      if (that.game.tickCount == 20) { // for testing only
        that.game.playCard(that.game.deck.cards[0])
      }
    },
    60)
  }

  getGame() {
    return this.game
  }

}
