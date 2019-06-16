var buildName4 = function (firstName, lastName) {
    if (firstName === void 0) { firstName = '123'; }
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
};
var buildName4Result = buildName4('Bob');
var buildName4Result2 = buildName4(undefined, 'Adams');
var buildName4Result3 = buildName4('Bob', 'Adams');
var buildName4Result4 = buildName4('Bob', 'Adams', 'Sr.');
var buildName4Result5 = buildName4('Bob', 'Adams');
console.log(buildName4Result);
console.log(buildName4Result2);
console.log(buildName4Result3);
console.log(buildName4Result4);
console.log(buildName4Result5);
