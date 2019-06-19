enum Enum4 {
  X,
  Y,
  Z,
}

function f4(obj: { X: number }) {
  return obj.X;
}

f4(Enum4);
