class Greeter4 {
  static standardGreeting = 'Hello, there';
  greeting: string;
  greet() {
    if (this.greeting) {
      return `Hello ${this.greeting}`;
    } else {
      return Greeter4.standardGreeting;
    }
  }
}

const greeter4: Greeter4 = new Greeter4();

console.log(greeter4.greet());

const greeterMaker: typeof Greeter4 = Greeter4;

greeterMaker.standardGreeting = 'Hey there!';

const greeter4_2: Greeter4 = new Greeter4();

console.log(greeter4_2.greet());
