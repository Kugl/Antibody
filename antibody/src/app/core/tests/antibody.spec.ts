import { WhiteBloodcell } from "../immune-system/antibodys";
import {
  Virus,
  Bacteria,
  makeVirusArray,
  makeBacteriaArray
} from "../diseases/diseases";

describe("Antibodys", () => {
  let whiteCell: WhiteBloodcell;
  let viruses: Virus[];
  let bacteria: Bacteria[];

  beforeAll(() => {});

  beforeEach(() => {
    viruses = makeVirusArray();
    bacteria = makeBacteriaArray();
    whiteCell = new WhiteBloodcell();
    viruses[0].Count = 100000000;
  });

  it("Should eliminate virus", () => {
    console.log(viruses[0]);
    let initialCount = viruses[0].Count;
    let combatPower = whiteCell.Count * 0.1;
    whiteCell.doBattle(viruses);
    console.log(viruses[0]);
    expect(viruses[0].Count).toBe(initialCount - combatPower);
  });
});
