function error(message: string): never {
  throw new Error(message);
}

function fail(): string {
  return error('failed');
}

fail();
