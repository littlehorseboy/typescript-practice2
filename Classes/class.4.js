var Greeter4 = /** @class */ (function () {
    function Greeter4() {
    }
    Greeter4.prototype.greet = function () {
        if (this.greeting) {
            return "Hello " + this.greeting;
        }
        else {
            return Greeter4.standardGreeting;
        }
    };
    Greeter4.standardGreeting = 'Hello, there';
    return Greeter4;
}());
var greeter4 = new Greeter4();
console.log(greeter4.greet());
var greeterMaker = Greeter4;
greeterMaker.standardGreeting = 'Hey there!';
var greeter4_2 = new Greeter4();
console.log(greeter4_2.greet());
