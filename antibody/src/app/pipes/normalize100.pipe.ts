import { Pipe } from "@angular/core";

@Pipe({ name: "normalize100" })
export class Normalize100 {
  transform(input: number) {
    return Math.floor(input);
  }
}
