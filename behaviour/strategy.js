/*
* The Strategy pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each one,
* and makes them interchangeable. It lets the algorithm vary independently from clients that use it. In essence,
* it allows you to choose an algorithm at runtime.
* */

class Vehicle {
  travelTime() {
    return this.timeTaken;
  }
}

class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10;
  }
}

class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5;
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3;
  }
}

class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

const commute = new Commute();
console.log(commute.travel((new Taxi())))
console.log(commute.travel((new Bus())))
console.log(commute.travel((new Car())))
