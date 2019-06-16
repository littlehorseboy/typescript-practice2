const buildName3 = (firstName: string, lastName = 123): string => {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
};

const buildName3Result = buildName3('Bob');
const buildName3Result2 = buildName3('Bob', undefined);
const buildName3Result3 = buildName3('Bob', 123);
const buildName3Result4 = buildName3('Bob', 'Adams', 'Sr.');
const buildName3Result5 = buildName3('Bob', 'Adams');

console.log(buildName3Result);
console.log(buildName3Result2);
console.log(buildName3Result3);
console.log(buildName3Result4);
console.log(buildName3Result5);
