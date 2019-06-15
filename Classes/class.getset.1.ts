let passcode = 'secret passcode';

class EmployeeGetSet1 {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullName = newName;
    } else {
      console.log('Error: Unauthorized update of employee!');
    }
  }
}

let employeeGetSet1 = new EmployeeGetSet1();
employeeGetSet1.fullName = 'Bob Smith';

if (employeeGetSet1.fullName) {
  console.log(employeeGetSet1.fullName);
}
