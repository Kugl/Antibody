import { Card } from "../card";

//Produces a new generation of Killer TCells for all current diseases
export function produceTCells() {
  let effects = [];
  const card = new Card(
    "Produce Killer TCells",
    "assets/pictures/corona.jpg",
    "Breeds a generation of TCells for all active diseases",
    effects
  );
  return card;
}
