function padLeft1(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  } else if (typeof padding === 'string') {
    return padding + value;
  }

  throw new Error(`Expected string or number, got '${padding}'`);
}

console.log(padLeft1('Hello world', 5));
