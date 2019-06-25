interface objects {
  [index: number]: {
    a: number;
    b: number;
  };
}

const objectsA: objects = [{ a: 1, b: 2 }];
const objectsB: objects = [{ a: 1 }];
const objectsC: objects = [];
const objectsD: objects = { };

interface objectsExtended extends objects {
  length: number;
}

const objectsExtendedA: objectsExtended = [{ a: 1, b: 2 }];
const objectsExtendedB: objectsExtended = [{ a: 1 }];
const objectsExtendedC: objectsExtended = [];
const objectsExtendedD: objectsExtended = { };
