'use strict';

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  //  На первый взгляд этот метод должен будет находиться в создаваемом объекте,
  // однако классы работают по принципу inheritance-es5, и этот метод запишется в прототип
  incrimentAge() {
  this.age += 1;
  }
}

const person = new Person('Luk', 32, 'male');

console.log(person);

class Staff extends Person {
  static annonce() {
    console.log('Staff - статическая функция annonce');
  }

  constructor(name, age, gender, location) {
    super(name, age, gender);
    this.location = location;
  }

  incrimentAge() {
  super.incrimentAge();
  console.log(this.age);
  }

  sayName() {
    console.log('My name is: ' + this.name);
  }

}

const staff = new Staff('Al', 25, 'male', 'London');
staff.incrimentAge();
staff.sayName();
console.log(staff);

Staff.annonce();
