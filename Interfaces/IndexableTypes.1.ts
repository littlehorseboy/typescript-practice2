interface StringArray {
  readonly [index: number]: string;
}

let myArray: StringArray = ['Bob', 'Fred'];

myArray[2] = 'horse';
