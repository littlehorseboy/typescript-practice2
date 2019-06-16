var buildName3 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 123; }
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
};
var buildName3Result = buildName3('Bob');
var buildName3Result2 = buildName3('Bob', undefined);
var buildName3Result3 = buildName3('Bob', 123);
var buildName3Result4 = buildName3('Bob', 'Adams', 'Sr.');
var buildName3Result5 = buildName3('Bob', 'Adams');
console.log(buildName3Result);
console.log(buildName3Result2);
console.log(buildName3Result3);
console.log(buildName3Result4);
console.log(buildName3Result5);
