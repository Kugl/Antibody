import { Component, HostListener, OnInit } from '@angular/core'


interface Layer {
  amount: number,
  moveDepth: number,
  displayDepth: number,
  items: {
    baseX: number,
    baseY: number
  }[]
}

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {
  e: MouseEvent | {x: number, y:number} = {x:0, y:0}

  readonly imageBaseSize = 200

  @HostListener('window:mousemove', ['$event'])
  handleMouseMove(event: MouseEvent) {
    // this.e = event
  }


  layers: Layer[] = [
    {
      amount: 100,
      moveDepth: 11,
      displayDepth: 15,
      items: []
    },
    {
      amount: 50,
      moveDepth: 8,
      displayDepth: 10,
      items: []
    },
    {
      amount: 20,
      moveDepth: 6,
      displayDepth: 8,
      items: []
    },
    {
      amount: 15,
      moveDepth: 5,
      displayDepth: 6,
      items: []
    },
    {
      amount: 8,
      moveDepth: 4,
      displayDepth: 4,
      items: []
    },
    {
      amount: 5,
      moveDepth: 3,
      displayDepth: 3,
      items: []
    },
    {
      amount: 1,
      moveDepth: 2,
      displayDepth: 2,
      items: []
    },
    {
      amount: 1,
      moveDepth: 2.4,
      displayDepth: 2.4,
      items: []
    },
    {
      amount: 1,
      moveDepth: 2.6,
      displayDepth: 2.6,
      items: []
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.populateLayers()
  }


  populateLayers() {
    function r() {
        return Math.floor(Math.random() * 100)
    }

    this.layers.forEach(layer => {
      for (let i = 0; i < layer.amount; i++) {
        layer.items.push({
          baseX: r(),
          baseY: r()
        })
      }
    })
  }
}
