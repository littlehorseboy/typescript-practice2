var suits1 = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (typeof x === 'object') {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x === 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits1[pickedSuit], card: x % 13 };
    }
}
var myDeck1 = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'hearts', card: 4 },
];
var pickedCard3 = myDeck1[pickCard(myDeck1)];
console.log("card " + pickedCard3.card + " of " + pickedCard3.suit);
var pickedCard4 = pickCard(15);
console.log("card " + pickedCard4.card + " of " + pickedCard4.suit);
