interface Empty<T> {
  data: T;
}

let emptyX: Empty<number>;
let emptyY: Empty<string>;

emptyX = emptyY;


let identity = function<T>(x: T): T {
  return;
};

let reverse = function<U>(y: U): U {
  return;
};

identity = reverse;
