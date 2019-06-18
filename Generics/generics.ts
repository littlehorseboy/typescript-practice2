function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('2');
let output2 = identity('str');
