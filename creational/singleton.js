/*
* The Singleton pattern is a creational design pattern that ensures a class has only one instance
* and provides a global point of access to that instance. It restricts the instantiation of a class to a single object.
* */
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData())

const mysql = new Database('MySQL');
console.log(mysql.getData())
