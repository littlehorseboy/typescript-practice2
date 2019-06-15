interface Greeter3Interface {
  greeting: string;
  greet(): string;
}

class Greeter3 implements Greeter3Interface {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

const greeter3: Greeter3 = new Greeter3('world');

console.log(greeter3.greet());
