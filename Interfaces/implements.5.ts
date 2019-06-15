interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  slideLength: number;
}

const square = <Square>{};

square.color = 'blue';
square.slideLength = 10;
square.penWidth = 5;
