class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Manager extends User {
  constructor(name, age) {
    super(name, age);
    this.position = 'manager';
  }
}

const user = new User('Alice', 23);
const manager = new Manager('Lin', 45);

for (let key in manager) {
  console.log(manager[key]);
} // Lin 45 manager

console.log(Object.entries(manager)); // [ [ 'name', 'Lin' ], [ 'age', 45 ], [ 'position', 'manager' ] ]

