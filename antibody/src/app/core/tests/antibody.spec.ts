import { WhiteBloodcell } from "../immune-system/antibodys";
import {
  Virus,
  Bacteria,
  makeVirusArray,
  makeBacteriaArray
} from "../diseases/diseases";
import { Randomizer } from "./randomHelper";

describe("Antibodys", () => {
  let whiteCell: WhiteBloodcell;
  let viruses: Virus[];
  let bacteria: Bacteria[];
  const random = new Randomizer();

  beforeAll(() => {});

  beforeEach(() => {
    viruses = makeVirusArray();
    bacteria = makeBacteriaArray();
    whiteCell = new WhiteBloodcell();
    viruses[0].Count = random.makenr(7);
    bacteria[0].Count = random.makenr(7);
  });

  it("Should eliminate virus", () => {
    let initialCount = viruses[0].Count;
    let combatPower = whiteCell.Count * whiteCell.CombatPower;
    whiteCell.doBattle(viruses);
    expect(viruses[0].Count).toBe(initialCount - combatPower);
  });

  it("Should eliminate bacteria", () => {
    let initialCount = bacteria[0].Count;
    let combatPower = whiteCell.Count * whiteCell.CombatPower;
    whiteCell.doBattle(bacteria);
    expect(bacteria[0].Count).toBe(initialCount - combatPower);
  });

  it("Should not fight if no bacteria is there", () => {
    bacteria[0].Count = 0;
    whiteCell.doBattle(bacteria);
    console.log(bacteria[0]);
    expect(bacteria[0].Count).toBe(0);
  });
});
