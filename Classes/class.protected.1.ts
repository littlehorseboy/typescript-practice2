class Person1 {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

class Employee1 extends Person1 {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

const howard1 = new Employee1('howard', 'Sales');
const John = new Person1('John');
