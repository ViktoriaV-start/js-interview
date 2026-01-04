"use strict";

const sum = (a, b) => {
  console.log(a + b);

  return a + b;
}

const decorator = (func) => {

  
  const log = (...args) => {
  // Здесь ...args - это rest-параметры (остаточные параметры),
  // которые собирают все переданные аргументы в один массив.

    console.log('Log');
    
    return func(...args);
    // Здесь ...args - это spread-оператор (оператор расширения),
    // который "распаковывает" массив args в отдельные аргументы для функции func.
  }

  return log;
}

const funcWithLog = decorator(decorator(sum));

funcWithLog(1, 2);
