const buildName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;

const buildNameResult = buildName('Bob');
const buildNameResult2 = buildName('Bob', 'Adams', 'Sr.');
const buildNameResult3 = buildName('Bob', 'Adams');
