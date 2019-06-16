function buildName5(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(' + ')}`;
}

console.log(buildName5('JJJ'));
console.log(buildName5('JJJ', 'KKK'));
console.log(buildName5('JJJ', 'KKK', 'LLL', 'MMMM'));
console.log(buildName5('JJJ', 'KKK', 'LLL', 'MMMM', 123));

const buildName5Func: (fName: string) => string = buildName5;
const buildName5Func2: (fName: string, ...rest: string[]) => string = buildName5;
