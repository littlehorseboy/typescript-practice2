var Greeter3 = /** @class */ (function () {
    function Greeter3(message) {
        this.greeting = message;
    }
    Greeter3.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter3;
}());
var greeter3 = new Greeter3('world');
console.log(greeter3.greet());
