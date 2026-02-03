class User {
  _name = null;
  _isOnline = false;

  constructor (name) {
    this._name = name;
  }

  get name() {
    // ЗАПРОС ИДЕТ user1.name, А ЭТОТ ГЕТТЕР ВЕРНЕТ СВОЮ ПЕРЕМЕННУЮ, КОТОРАЯ НАЗЫВАЕТСЯ ПО-ДРУГОМУ - this._name

    return this._name;
  }

  set isOnline(status) {
    this._isOnline = status;
  }

  get isOnline() {
    return this._isOnline;
  }
}

const user1 = new User('Al');

user1.isOnline = true; // ВЫЗОВЕТ СЕТТЕР

console.log(user1.isOnline); // ВЫЗОВЕТ ГЕТТЕР

console.log(user1, user1.name, user1.isOnline);

