const buildName4 = (firstName = '123', lastName: string): string => {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
};

const buildName4Result = buildName4('Bob');
const buildName4Result2 = buildName4(undefined, 'Adams');
const buildName4Result3 = buildName4('Bob', 'Adams');
const buildName4Result4 = buildName4('Bob', 'Adams' , 'Sr.');
const buildName4Result5 = buildName4('Bob', 'Adams');

console.log(buildName4Result);
console.log(buildName4Result2);
console.log(buildName4Result3);
console.log(buildName4Result4);
console.log(buildName4Result5);
