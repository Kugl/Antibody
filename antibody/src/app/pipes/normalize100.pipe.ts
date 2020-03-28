import { Pipe } from "@angular/core";

@Pipe({ name: "normalize100" })
export class RoundPipe {
  transform(input: number) {
    return Math.floor(input);
  }
}
