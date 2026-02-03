'use strict';

// ПЕРВЫЙ ПРИМЕР НАСЛЕДОВАНИЯ
function UserRole() {
  this.rights = ['edit', 'write'];
}

function ModeratorRole() {
  UserRole.call(this); // вызвали функцию-конструктор и закрепили this - создаваемый объект
  this.rights.push('delete');
}

const moderator = new ModeratorRole();

// Унаследовал полный массив rights
// И это не в прототипе, а на верхнем уровне, свое свойство
console.log(moderator); // ModeratorRole { rights: [ 'edit', 'write', 'delete' ] }

// ВТОРОЙ ПРИМЕР НАСЛЕДОВАНИЯ

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// Добавим в прототип общую для всех экземпляров функцию (метод-поведение)
Person.prototype.incrimentAge = function() {
  this.age += 1;
}

function Staff(name, age, gender, location) {
  Person.call(this, name, age, gender); // ПЕРЕДАТЬ НУЖНО this для закрепления порождаемого объекта плюс отдельные параметры
  this.location = location;
}

// В прототип Staff сейчас добавим функцию из прототипа Person - унаследуем метод
Staff.prototype = Object.create(Person.prototype); // перезаписывается и конструктор теряется

// Поставить конструктор назад - потому что он потерялся после предыдущей записи
Staff.prototype.constructor = Staff;

// Можем добавить собственные методы:
Staff.prototype.ownMethod = function() {
  console.log('My name is: ' + this.name);
}

const staff = new Staff('Al', 25, 'male', 'London');
staff.incrimentAge();
staff.ownMethod();
console.log(staff); // Staff { name: 'Al', age: 26, gender: 'male', location: 'London' }




