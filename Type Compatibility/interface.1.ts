
interface Named1 {
  name: string;
}

let x: Named;

let y = { name: 'Alice', location: 'Seattle' };
x = y;

function greet(n: Named1): void {
  console.log(`Hello, ${n.name}`);
}

greet(y);
