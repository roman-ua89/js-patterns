/*
* it lets you traverse a collection (like an array, list, or tree) one element at a time,
* without needing to know how that collection is stored internally.
* */
class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0
          }
        }
      }
    }
  }
}

const iterator = new MyIterator(['This', 'is', 'iterator']);
// for (const val of iterator) {
//   console.log('value: ', val)
// }

// or ->
function* generator(collection) {
  let index = 0;
  while(index < collection.length) {
    yield collection[index++];
  }
}

const gen = generator(['This', 'is', 'iterator']);
// for (const val of gen) {
//   console.log('value: ', val);
// }
console.log(gen.next().value)
console.log(gen.next().value)
