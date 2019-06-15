interface Shape {
  color: string;
}

interface Square extends Shape {
  slideLength: number;
}

const square = <Square>{};

square.color = 'blue';
square.slideLength = 10;
