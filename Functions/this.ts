const deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function() {
    const self = this;
    return function() {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);

      return { suit: self.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
}

const cardPicker = deck.createCardPicker();
const pickedCard = cardPicker();

console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);

const cardPicker2 = deck.createCardPicker();
const pickedCard2 = cardPicker2();

console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);
console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);
