/*
* The State pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes.
* This pattern encapsulates state-specific behavior into separate state objects.
* The main object (often called the "context") delegates state-dependent behavior to the current state object.
* This approach helps to avoid large, complex conditional statements (if/else or switch) based on the object's state.
* */

class Light {
  constructor(light) {
    this.light = light;
  }
}

class RedLight extends Light {
  constructor() {
    super('red');
  }

  sign() {
    return 'STOP'
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow');
  }

  sign() {
    return 'READY'
  }
}

class GreenLight extends Light {
  constructor() {
    super('green');
  }

  sign() {
    return 'GO'
  }
}

class TrafficLight {
  constructor() {
    this.states = [
      new RedLight(),
      new YellowLight(),
      new GreenLight(),
    ]
    this.current = this.states[0]
  }

  change() {
    const total = this.states.length;
    let index = this.states.findIndex(light => light === this.current);

    if (index + 1 < total) {
      this.current = this.states[index + 1]
    } else {
      this.current = this.states[0];
    }
  }

  sign() {
    return this.current.sign();
  }
}

const traffic = new TrafficLight();
console.log(traffic.sign())
traffic.change();
console.log(traffic.sign())
traffic.change();
console.log(traffic.sign())
