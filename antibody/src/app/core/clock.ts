import { TicksPerDay, MillisecondsPerDay } from "./constants";

export class Clock {
  tickCount: number = 0;

  tick() {
    this.tickCount += 1;
  }

  // maybe don't need a specific date, just age (see functions below) is sufficient
  get date(): string {
    const startDate = new Date(2021, 0, 1, 0, 0, 0, 0);
    //console.log(this.tickCount / TicksPerDay);
    startDate.setTime(
      startDate.getTime() + (this.tickCount / TicksPerDay) * MillisecondsPerDay
    );
    return startDate.toLocaleString();
  }

  // age functions below, assuming start at age 0, and constant 365 days / year

  get day(): number {
    return Math.floor(this.tickCount / TicksPerDay);
  }

  get year(): number {
    return Math.floor(this.day / 365);
  }

  get dayOfYear(): number {
    return Math.floor(this.dayOfYear);
  }
}
