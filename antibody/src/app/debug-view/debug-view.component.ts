import { Component, OnInit } from '@angular/core';
import { CentralService } from '../services/central.service'
import { Game } from '../core/game'


@Component({
  selector: 'app-debug-view',
  templateUrl: './debug-view.component.html',
  styleUrls: ['./debug-view.component.scss']
})
export class DebugViewComponent implements OnInit {
  
  game: Game

  constructor(public centralService: CentralService) { }

  ngOnInit(): void {
    this.game = this.centralService.getGame()
  }

}
