interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock2 implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) { }
}
