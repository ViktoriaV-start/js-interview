'use strict';

// Обычный объект с методами
const user = {
  author: 'Admin',
  name: 'Al',
  show: function() {
    console.log(this.author + ': ' + this.name)
  },
  sayHello() {
    console.log(this.author + ' say Hello');
  }
};

// Вызываем методы объекта
user.show();
user.sayHello();

// ВТОРОЙ ПРИМЕР с отдельным новым объектом в прототип
const message = {
  theme: 'Stories',
  getMessage: function() {
    console.log(`${this.author}: ${this.text}, ${this.theme}`)
    // this будет текущий объект, для которого этот объект будет установлен прототипом
  }
}

// Функции - конструкторы 
// Их задача - порождать новые объекты
// Функции также являются и объектами, поэтому этой функции-конструктору мы можем установить прототип.
// Правило: данные храним в объекте, поведение-методы - в прототипе
function Post (author, text) {
  this.author = author;
  this.text = text;

  // Не нужно метод вот так задавать
  // Это занимает память при каждом создании нового объекта! Неэкономное испольхование оперативной памяти
  // Функцию лучше сохранять в прототип

  this.show = function() { console.log(this.author) }
}

Post.prototype = message; // Установили прототип
// Теперь все наследники смогут пользоваться одной и той же функцией из прототипа (не одинаковой, а той же самой)


const post1 = new Post('Lin', 'My love'); // первый объект типа Post
const post2 = new Post('Neo', 'Guard'); // второй объект типа Post

console.log(post1.__proto__ === post2.__proto__); // true

console.log(post1); // { author: 'Lin', text: 'My love', show: [Function (anonymous)] }
post2.show(); // Neo

// Посмотрим, что за объект сейчас находится в прототипе post1 и post2:
// Это тот же самый объект
console.log(post1.theme); // найдет в прототипе
console.log(message.isPrototypeOf(post1)); // true

console.log(post1.toString);

// Вызвать функцию из прототипа, она this будет использовать - текущий объект
post1.getMessage(); // Lin: My love, Stories


// ТРЕТИЙ ПРИМЕР с доьбавлением общей функции для всех экземпляров в прототип, без замены текущего прототипа

const Car = function(model) {
  this.model = model;
}

Car.prototype.move = function() {
  console.log(`${this.model} движется!`);
}

const car1 = new Car('Audi');

car1.move(); // Audi движется!
console.log(car1); // Car { model: 'Audi' } Покажет только свои  перечисляемые ключи


// Посмотрим все перечисляемы свойства - свои и унследованные
for (const key in car1) {
  console.log(key, car1[key]);
//   model Audi
//   move [Function (anonymous)]
}

console.log(car1.__proto__ === Car.prototype); // true

// car1.__proto__ - СВОЙСТВО ГОТОВОГО ЭКЗЕМПЛЯРА
// Car.prototype - СВОЙСТВО ФУНКЦИИ-КОНСТРУКТОРА
// __proto__ И prototype - ЭТО ОДИН И ТОТ ЖЕ ОБЪЕКТ, просто по разному обращение

