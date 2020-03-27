import { Card } from "../card";

//Doubles the White Blood Cells
export function produceWhiteCells() {
  let effects = [];
  const card = new Card(
    "Produce White Cells",
    "assets/pictures/corona.jpg",
    "Doubles the amount of white blood cells in the Bloodstream",
    effects
  );
  return card;
}
