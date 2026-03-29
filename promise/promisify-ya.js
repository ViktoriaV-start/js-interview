/**
 * Возвращающую новую функцию, которая будет принимать функцию и выполнять ее в асинхронном режиме и возвращать промис.
 * То есть - есть ф-ция с таймером, нужно дождаться ее выполнения.
 * 
 * @param {Function} fn - Функция
 * @returns {Function} - Новая функция, возвращающая промис
 */
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {

      const callback = (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      };

      fn(...args, callback);

    });
  };
}

// function promisify(fn) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       fn.call(this, ...args, (err, result) => { // CALL ЧТОБЫ СОХРАНИТЬ this
//         if (err) reject(err);
//         else resolve(result);
//       });
//     });
//   };
// }


// Тест 1: Успешное выполнение функции с коллбэком
const readData = (file, callback) => {
  setTimeout(() => callback(null, `Data from ${file}`), 100);
};
const readDataPromise = promisify(readData);
readDataPromise("file.txt")
  .then(result => console.log(result)) // "Data from file.txt"
  .catch(err => console.error(err));

// // Тест 2: Ошибка в функции с коллбэком
// const faultyFn = (input, callback) => {
//   setTimeout(() => callback(new Error("Failed!")), 50);
// };
// const faultyFnPromise = promisify(faultyFn);
// faultyFnPromise("test")
//   .then(result => console.log(result))
//   .catch(err => console.error(err.message)); // "Failed!"

// // Тест 3: Функция с несколькими аргументами
// const addNumbers = (a, b, callback) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return callback(new Error("Invalid input"));
//   }
//   callback(null, a + b);
// };
// const addNumbersPromise = promisify(addNumbers);
// addNumbersPromise(2, 3)
//   .then(result => console.log(result)) // 5
//   .catch(err => console.error(err));

// // Тест 4: Синхронная функция
// const syncFn = (input, callback) => callback(null, input.toUpperCase());
// const syncFnPromise = promisify(syncFn);
// syncFnPromise("hello")
//   .then(result => console.log(result)) // "HELLO"
//   .catch(err => console.error(err));