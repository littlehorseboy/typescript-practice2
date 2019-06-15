interface ClockConstructor2 {
  new (hour: number, minute: number): ClockInterface2;
}

interface ClockInterface2 {
  tick(): void;
}

function createClock(ctor: ClockConstructor2, hour: number, minute: number): ClockInterface2 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2 {
  constructor(h: number, m: number) { }
  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface2 {
  constructor(h: number, m: number) { }
  tick() {
    console.log('tick tock');
  }
}

const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 33);
