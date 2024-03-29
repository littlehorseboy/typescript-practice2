class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class EmployeeProtected extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

const howard = new EmployeeProtected('Howard', 'Sales');
console.log(howard.getElevatorPitch());
console.log(howard.name);
