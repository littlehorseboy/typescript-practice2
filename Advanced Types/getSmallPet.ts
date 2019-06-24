interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  return <Fish | Bird>{};
}

let pet = getSmallPet();

pet.layEggs();
pet.swim();
pet.fly();
