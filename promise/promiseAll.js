/**
 * Реализуйте функцию promiseAll, которая работает аналогично Promise.all
 * 
 * @param {Array} promises - Массив промисов и/или обычных значений
 * @returns {Promise} - Промис, который резолвится с массивом результатов
 */
function promiseAll(promises) {
  // Ваша реализация здесь
  return new Promise((resolve, reject) => {
    const result = [];
    const length = promises.length;
    let count = 0;

    if (length === 0) {
      return resolve(result);
    }

    promises.forEach((item, idx) => {
      Promise.resolve(item)
      .then(res => {
        result[idx] = res;
        ++count;

        if (count === length) {
          resolve(result);
        }
      })
      .catch(error => reject(error));
    })
  })
}

// Тест 1: Все промисы успешны
promiseAll([
  Promise.resolve(1),
  new Promise(resolve => setTimeout(() => resolve(2), 100)),
  "hello"
])
  .then(console.log);// [1, 2, "hello"] (порядок сохранён)

// Тест 2: Ошибка в одном из промисов
promiseAll([
  Promise.resolve(1),
  Promise.reject("ERROR"),
  Promise.resolve(3)
])
  .catch(console.error); // "ERROR" (первая же ошибка)

// Тест 3: C не-промисами
promiseAll([
  42,
  "test",
  Promise.resolve(null),
])
  .then(console.log); // [42, "test", null]
