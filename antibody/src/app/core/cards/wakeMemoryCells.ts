import { Card } from "../card";

//Wakes the Memory Cells for all current diseases
export function wakeMemoryCells() {
  let effects = [];
  const card = new Card(
    "Wake Nenory Cells",
    "assets/pictures/corona.jpg",
    "Wakes up all Memory Cells to combat active diseases",
    effects
  );
  return card;
}
