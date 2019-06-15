class Animal4 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animal4 {
  constructor() {
    super('Rhino');
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal4('Goat');
const rhino = new Rhino();
const employee = new Employee('Bob');

animal = rhino;
animal = employee;
