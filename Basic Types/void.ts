function warnUser(): void {
  console.log('warn message');
}

warnUser();

let unusable: void = undefined;

unusable = null;

unusable = 1;
