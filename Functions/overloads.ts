const suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x): any {
  if (typeof x === 'object') {
    const pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x === 'number') {
    const pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13};
  }
}

const myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
];

const pickedCard1 = myDeck[pickCard(myDeck)];
console.log(`card ${pickedCard1.card} of ${pickedCard1.suit}`);

const pickedCard2 = pickCard(15);
console.log(`card ${pickedCard2.card} of ${pickedCard2.suit}`);
