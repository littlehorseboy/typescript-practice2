var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    Octopus.prototype.changeName = function () {
        this.name = '123';
    };
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
console.log(dad.name);
dad.changeName();
console.log(dad.name);
dad.name = '3-piece suit';
console.log(dad.name);
