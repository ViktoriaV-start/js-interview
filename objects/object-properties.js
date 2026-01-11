'use strict';

// Просто скопируй и используй в начале файла
const clr = {
    r: (t) => `\x1b[31m${t}\x1b[0m`, // red
    g: (t) => `\x1b[32m${t}\x1b[0m`, // green
    y: (t) => `\x1b[33m${t}\x1b[0m`, // yellow
    b: (t) => `\x1b[34m${t}\x1b[0m`, // blue
    m: (t) => `\x1b[35m${t}\x1b[0m`, // magenta
    c: (t) => `\x1b[36m${t}\x1b[0m`, // cyan
};

const myObjSym = Symbol('myObjectSymbol');

const obj = {
  name: 'Alex',
  age: 29,
  [myObjSym]: '754jR' // СИМВОЛ - СОБСТВЕННЫЙ И НЕПЕРЕЧИСЛЯЕМЫЙ
}

// Добавим неперечисляемое незаписываемое свойство
Object.defineProperty(obj, "notEnurmerableProp", {
  value: 'This is not enumerable and notWritable property',
  enumerable: false,
  writable: false,
  configurable: true
});

// ПОЛУЧИТЬ КЛЮЧИ ОБЪЕКТА - Cобственные перечисляемые
console.log(clr.b('Cобственные перечисляемые - Object.keys: '), Object.keys(obj));

// ПОЛУЧИТЬ КЛЮЧИ ОБЪЕКТА - Собственные перечисляемые и неперечисляемые
console.log(clr.b('Собственные перечисляемые и неперечисляемые - Object.getOwnPropertyNames: '),
Object.getOwnPropertyNames(obj));

const obj2 = Object.create(obj);
obj2.position = 'manager';


// ПОЛУЧИТЬ КЛЮЧИ ОБЪЕКТА -  перечисляемые свои и перечисляемые унаследованные
console.log(clr.r('Перечисляемые ключи: свои и унаследованные obj <- obj2:'))
for (let key in obj2) {
  console.log(key); 
}

// Смотрим, что у начального obj прототипом является Object
console.log((Object.getPrototypeOf(obj)).constructor === Object)

// Получить прототип объекта - отдаст целиком объект со всеми свойствами
console.log(clr.r('Узнать прототип obj2:'), Object.getPrototypeOf(obj2))

// Проверить наличие ключа "name" in obj2 - смотрит даже в прототипе
console.log(clr.r('Проверить наличие ключа "name" in obj2'), 'name' in obj2)
console.log(Reflect.has(obj2, 'name'));

console.log(clr.r('Проверить наличие ключа "toString" in obj2'), 'toString' in obj2)
console.log(Reflect.has(obj2, 'toString'));
