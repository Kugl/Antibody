import { Deck } from "../deck";
import { Randomizer } from "./randomHelper";

describe("Deck", () => {
  let deck: Deck;
  const random = new Randomizer();

  beforeAll(() => {});

  beforeEach(() => {
    let cards = [];
    for (let i = 0; i <= 10; i++) {
      let card = random.getRandomCard();
      cards.push(card);
    }
    deck = new Deck(cards);
    deck.graveyard = [];
  });

  it("Should properly draw a card", () => {
    console.log(deck.cards);
    let initialSize = deck.cards.length;
    let firstCard = deck.cards[0];
    let theCard = deck.drawCard();
    expect(deck.cards.length).toEqual(initialSize - 1);
    expect(theCard).toBe(firstCard);
  });

  it("Should properly shuffle", () => {
    console.log(deck.cards);
    let initialSize = deck.cards.length + deck.graveyard.length;
    let firstCard = deck.cards[0];
    deck.shuffle();
    expect(deck.cards.length).toEqual(initialSize);
    expect(deck.cards[0]).not.toBe(firstCard);
  });
});
