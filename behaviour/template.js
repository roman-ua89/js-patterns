/*
* The Template Method pattern is a behavioral design pattern that defines the skeleton of an algorithm in a base class
* but lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
* It provides a template for an algorithm, allowing subclasses to fill in the blanks with their specific implementations.
* */

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} executes ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} has salary ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'Writes code.'
  }
}


class QA extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'Testing code.'
  }
}

const dev = new Developer('Roman', 4000);
console.log(dev.getPaid())
console.log(dev.work())

const qa = new QA('Vika', 1500);
console.log(qa.getPaid())
console.log(qa.work())

