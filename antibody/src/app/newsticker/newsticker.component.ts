import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs'

@Component({
  selector: 'app-newsticker',
  templateUrl: './newsticker.component.html',
  styleUrls: ['./newsticker.component.scss']
})
export class NewstickerComponent implements OnInit {
  lorem = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`


  news: {time: string, message: string}[] = []

  constructor() { }

  ngOnInit(): void {
    timer(0, 3000).subscribe(ping => {
      const loremWords = this.lorem.split(' ')
      const randomStart = Math.random() * loremWords.length
      loremWords.push(...loremWords)
      const length = 3
      const words = loremWords.slice(randomStart, randomStart + length)
      const date = new Date(Date.now())
      this.news.push({
        time: `${date.getDay()}-${date.getMonth()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
        message: words.join(' ')
      })
    })
  }

}
