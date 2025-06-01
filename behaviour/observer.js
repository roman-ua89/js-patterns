/*
* The Observer pattern is a behavioral design pattern that defines a one-to-many dependency
* between objects so that when one object (the subject) changes state,
* all its dependents (observers) are notified and updated automatically.
* It's a way to implement distributed event handling systems.
* The core idea is to define a subscription mechanism so that objects can "subscribe" to events
* that are raised by another object (the subject).
* */

/*
* Where it's Used:
* Event Handling in UI Frameworks: DOM events (e.g., button clicks, form submissions) are often handled using the Observer pattern.
* UI elements act as subjects, and event listeners act as observers.
*
* Model-View-Controller (MVC) Architecture: The view observes the model. When the model changes, the view is updated.*
* */
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action);
    })
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.intialState = state;
  }

  update(action) {
    switch (action.type) {
      case 'increment':
        this.state = ++this.state;
        break;
      case 'decrement':
        this.state = --this.state;
        break;
      case 'add':
        this.state += action.payload;
        break;
      default: this.state = this.intialState;
    }
  }
}

const stream$ = new Subject();

const obs1 = new Observer()
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({ type: 'increment' })
stream$.fire({ type: 'add', payload: 10 });

console.log(obs1.state)
console.log(obs2.state)
