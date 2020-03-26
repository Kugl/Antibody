const baseBodyTemperature = 37
const feverIncrease = 2

export class Body {
  fever: boolean = false

  get temperature(): number {
    return baseBodyTemperature + (this.fever ? feverIncrease : 0)
  }
}