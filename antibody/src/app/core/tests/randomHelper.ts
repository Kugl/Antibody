import { Card } from "../card";

export class Randomizer {
  getRandomCard(): Card {
    let card = new Card();
    this.randomizeObject(card);
    return card;
  }

  randomizeObject(theObj: Card): Card {
    for (var propt in theObj) {
      // If certain values are supposed to get special treatment add here:
      //if (propt == "id"){
      //  theObj[propt]="Help ME!";
      //  continue;
      //}
      //null is of type Object in Javascript. Because Javascript
      if (theObj[propt] == null || typeof theObj[propt] === "number") {
        theObj[propt] = this.makenr(5);
        continue;
      } else if (typeof theObj[propt] === "string") {
        theObj[propt] = this.makestr(5);
        continue;
      } else if (typeof theObj[propt] === "object") {
        //Yes I am self-calling :-)
        this.randomizeObject(theObj[propt]);
      } else {
        theObj[propt] = this.makestr(5);
        console.log("ATTENTION: I should never appear!");
      }
    }
    return theObj;
  }

  makestr(length: number) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  makenr(length: number) {
    var result = "";
    var characters = "0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return +result;
  }
}
