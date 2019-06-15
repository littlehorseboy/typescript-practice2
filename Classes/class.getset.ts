class EmployeeGetSet {
  fullName: string;
}

let employeeGetSet = new EmployeeGetSet();
employeeGetSet.fullName = 'Bob Smith';

if (employeeGetSet.fullName) {
  console.log(employeeGetSet.fullName);
}
