interface objecttt {
  a: number;
  b: number;
}

interface objecttts extends Array<objecttt>{ };

const arrayA: objecttts = [
  { a: 1 },
];
