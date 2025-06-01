/*
* The Prototype pattern is a creational design pattern that allows you to create new objects by copying (cloning) an existing object,
* known as the prototype. This is particularly useful when creating objects is expensive (e.g.,
* involves complex calculations, database access, or network calls) or when you need to create many objects that are similar to each other.
* Instead of creating new objects from scratch, you can create a prototype object and then clone it to create new objects
* with the same initial state.
* */

const car = {
  wheels: 4,

  init() {
    console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Roman'
  }
})

console.log(carWithOwner.__proto__ === car); // true
carWithOwner.init();
