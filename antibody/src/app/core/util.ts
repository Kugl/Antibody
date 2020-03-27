import { TicksPerDay } from './constants';


// if something grows by a factor of 1.1 per day, how much should it grow per tick?
export function factorDay2Tick(factor) {
  return Math.pow(factor, 1/TicksPerDay)
}

// if something grows by a fixed number per day, how much should it grow per tick?
export function linearRateDay2Tick(linear) {
  return linear / TicksPerDay
}