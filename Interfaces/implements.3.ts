interface ClockConstructor3 {
  new (hour: number, minute: number);
}

interface ClockInterface3 {
  tick();
}

const Clock3: ClockConstructor3 = class Clock implements ClockInterface3 {
  constructor() {}
  tick() {

  }
}
