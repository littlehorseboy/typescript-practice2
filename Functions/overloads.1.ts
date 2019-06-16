const suits1 = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
  if (typeof x === 'object') {
    const pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x === 'number') {
    const pickedSuit = Math.floor(x / 13);
    return { suit: suits1[pickedSuit], card: x % 13};
  }
}

const myDeck1 = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
];

const pickedCard3 = myDeck1[pickCard(myDeck1)];
console.log(`card ${pickedCard3.card} of ${pickedCard3.suit}`);

const pickedCard4 = pickCard(15);
console.log(`card ${pickedCard4.card} of ${pickedCard4.suit}`);
