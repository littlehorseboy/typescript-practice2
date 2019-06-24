interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet1(): Fish | Bird {
  return <Fish | Bird>{};
}

let pet1 = getSmallPet1();

pet1.layEggs();

if ((<Fish>pet1).swim) {
  (<Fish>pet1).swim();
} else if ((<Bird>pet1).fly) {
  (<Bird>pet1).fly();
}

function isFish1(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

if (isFish1(pet1)) {
  pet1.swim();
} else {
  pet1.fly();
}
