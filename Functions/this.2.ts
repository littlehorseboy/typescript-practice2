interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

const deck2: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
}

const cardPicker = deck2.createCardPicker();
const pickedCard = cardPicker();

console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);

const cardPicker2 = deck2.createCardPicker();
const pickedCard2 = cardPicker2();

console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);
console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);
