var buildName2 = function (firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
};
var buildName2Result = buildName2('Bob');
var buildName2Result2 = buildName2('Bob', 'Adams', 'Sr.');
var buildName2Result3 = buildName2('Bob', 'Adams');
