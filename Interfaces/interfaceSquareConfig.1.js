function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.colo) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
