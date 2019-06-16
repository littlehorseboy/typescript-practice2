function buildName5(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(' + ');
}
console.log(buildName5('JJJ'));
console.log(buildName5('JJJ', 'KKK'));
console.log(buildName5('JJJ', 'KKK', 'LLL', 'MMMM'));
console.log(buildName5('JJJ', 'KKK', 'LLL', 'MMMM', 123));
