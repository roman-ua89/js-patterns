
/*
* The Command pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request.
* This transformation lets you parameterize clients with different requests, queue or log requests, and support undoable operations.
* */

//--------------------------- Example 1

class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue;
  }

  square() {
    return this.num ** 2;
  }

  cube() {
    return this.num ** 3;
  }
}

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

const x = new Command(new MyMath(2));
console.log(x.execute('square'));
console.log(x.execute('cube'));
console.log(x.commandsExecuted);


//--------------------------- Example 2

// Receiver
class Light {
  constructor() {
    this.isOn = false;
  }

  on() {
    this.isOn = true;
    console.log("Light is ON");
  }

  off() {
    this.isOn = false;
    console.log("Light is OFF");
  }
}

// Command Interface (Implicit in JavaScript)
// We don't need to explicitly define an interface in JavaScript,
// but the concept remains the same:  commands should have an execute() method

// Concrete Commands
class TurnOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

class TurnOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.off();
  }
}

// Invoker
class Switch {
  constructor() {
    this.commands = []; // For storing command history (optional)
  }

  storeAndExecute(command) {
    this.commands.push(command); // Store the command (for undo/redo)
    command.execute();
  }
}

// Client
const light = new Light();
const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);
const mySwitch = new Switch();

mySwitch.storeAndExecute(turnOn);  // Light is ON
mySwitch.storeAndExecute(turnOff); // Light is OFF
console.log(mySwitch.commands)
