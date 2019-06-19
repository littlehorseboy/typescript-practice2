enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  radius: number;
}

const c: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
}
