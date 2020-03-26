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
    },
    60)
  }

  getGame() {
    return this.game
  }

  drawCard() {
    this.game.drawCard()
  }

  playCard(card) {
    this.game.playCard(card)
  }

  discardCard(card) {
    this.game.discardCard(card)
  }

}
