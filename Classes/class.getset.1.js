var passcode = 'secret passcode';
var EmployeeGetSet1 = /** @class */ (function () {
    function EmployeeGetSet1() {
    }
    Object.defineProperty(EmployeeGetSet1.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeGetSet1;
}());
var employeeGetSet1 = new EmployeeGetSet1();
employeeGetSet1.fullName = 'Bob Smith';
if (employeeGetSet1.fullName) {
    console.log(employeeGetSet1.fullName);
}
