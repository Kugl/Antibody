import { Clock } from './clock';

export class NewsMessage {
  constructor(time: string, content: string) {
    this.time = time;
    this.content = content;
  }
  time: string;
  content: string;
}


export class NewsTicker {

  news: NewsMessage[]
  clock: Clock;
  
  constructor(clock: Clock) {
    this.clock = clock;
    this.news = []
  }

  publishNews(content: string) {
    this.news.push(new NewsMessage(this.clock.date, content));
  }
}