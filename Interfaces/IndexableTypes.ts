interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ['Bob', 'Fred'];

const myStr: string = myArray[1];

console.log(myStr);
