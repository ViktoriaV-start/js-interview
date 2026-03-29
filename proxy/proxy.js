const user = {
  name: 'Alex',
  role: 'admin',
  status: 'active'
};

const handler = {
  get(obj, prop, receiver) {
    console.log('Получить ', prop);
    console.log(receiver)

    return obj[prop];
  },

  set(obj, prop, value, receiver) {
    if (!(prop in obj)) {
      throw new Error(`Свойство ${prop} отсутствует в объекте`);
    }

    console.log(`Присвоение нового значения для ${prop} = ${value}`)
    obj[prop] = value;

    return true;
  }
}


const userProxy = new Proxy(user, handler);

userProxy.name = 'Ive';
console.log(userProxy.name);
console.log(user.name);

console.log(userProxy.role)

// userProxy.age = 23; //Error: Свойство name отсутствует в объекте
