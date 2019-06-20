let funcX1 = (): { name: string } => ({ name: 'Alice' });
let funcY1 = (): { name: string, location: string } => ({ name: 'Alice', location: 'Seattle' });

funcX1 = funcY1;
funcY1 = funcX1;
