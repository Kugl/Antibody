import { TicksPerDay, MillisecondsPerDay } from './constants';

export class Clock {

  tickCount: number = 0;

  tick() {
    this.tickCount += 1;
  }

  get date(): string {
    const startDate = new Date(2021, 0, 1, 0, 0, 0, 0);
    //console.log(this.tickCount / TicksPerDay);
    startDate.setTime(
      startDate.getTime() + (this.tickCount / TicksPerDay) * MillisecondsPerDay
    );
    return startDate.toLocaleString();
  }
}