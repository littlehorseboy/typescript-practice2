class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
    this.name = theName;
  }
  changeName() {
    this.name = '123';
  }
}

let dad = new Octopus('Man with the 8 strong legs');

console.log(dad.name);

dad.changeName();

console.log(dad.name);

dad.name = '3-piece suit';

console.log(dad.name);
