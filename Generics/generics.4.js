function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity(3);
loggingIdentity({ vaule: 3, length: 16 });
