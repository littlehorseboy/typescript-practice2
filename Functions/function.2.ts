const buildName2 = (firstName: string, lastName?: string): string => {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
};

const buildName2Result = buildName2('Bob');
const buildName2Result2 = buildName2('Bob', 'Adams', 'Sr.');
const buildName2Result3 = buildName2('Bob', 'Adams');
