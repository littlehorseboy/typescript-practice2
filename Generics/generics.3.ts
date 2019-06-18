function identity3<T>(arg: T): T {
  return arg;
}

let myIdentity3: <T>(arg: T) => T = identity3;
let myIdentity4: <U>(arg: U) => U = identity3;
let myIdentity5: <T>(arg: string) => string = identity3;
let myIdentity6: {<T>(arg: T): T} = identity3;

interface GenericIdentityFn {
  <T>(arg: T): T;
}

let myIdentity7: GenericIdentityFn = identity3;


interface GenericIdentityFn2<T> {
  (arg: T): T;
}

let myIdentity8: GenericIdentityFn2<number> = identity3;
