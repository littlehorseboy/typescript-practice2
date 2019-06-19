enum Enum {
  No,
  Yes,
}

function consoleEnum(recipient: string, message: Enum): void {
  console.log(recipient, message);
}

consoleEnum('haha', Enum.No);
