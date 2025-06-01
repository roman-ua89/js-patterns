/**
 * The Mediator pattern is a behavioral design pattern that reduces direct dependencies between objects by having them communicate through a mediator object.
 * The mediator promotes loose coupling by acting as a central hub that knows about all the colleagues (objects) and routes communications between them.
 * Instead of colleagues directly communicating with each other, they send messages to the mediator, which then forwards those messages to the appropriate colleague(s).
 *
 */

class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to); // this - current user
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      })
    }
  }
}

const roman = new User('Roman');
const oleg = new User('Oleg');
const anna = new User('Anna');

const room = new ChatRoom();

room.register(roman)
room.register(oleg)
room.register(anna)

roman.send('hello', anna)
anna.send('heeeey', roman)

