/**
 * Возвращающую новую функцию, которая будет принимать функцию и выполнять ее в асинхронном режиме 
 * и возвращать промис.
 * То есть - есть ф-ция с таймером, нужно дождаться ее выполнения.
 * 
 * @param {Function} fn - Функция
 * @returns {Function} - Новая функция, возвращающая промис
 */
function promisуWrapper(fn) {
  return (...args) => {
    try {
      return Promise.resolve(fn(...args));
    } catch (err) {
      return Promise.reject(err);
    }
  };

}




const readData = () => {
  setTimeout(() => console.log(`Data from`), 1000);
};

const readDataPromise = promisуWrapper(readData);
readDataPromise()
  .then(result => console.log(result)) // "Data from file.txt"
  .catch(err => console.error(err));
