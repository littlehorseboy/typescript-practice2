function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class GretterDD {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

const GGG = new GretterDD('horse');
GGG.greet();
