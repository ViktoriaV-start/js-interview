'use strict';

// В массиве чисел удалить все вхождения заданного числа на месте - переместить в конец массива.
// Вернуть число элементов в начале массива, которые не являются заданным значением.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  if (!nums.length) return 0;


  for (let i = 0; i < nums.length; i++) {

    if (nums[i] === val) {
      let idx = i;

      for (let j = i+1; j < nums.length; j++) {
        if (nums[j] !== val) {
          idx = j;
          break;
        }
      }

      if (idx > i) {
       [nums[i], nums[idx]] = [nums[idx], nums[i]];
      } else {
        break;
      }
    }
  }

  const getCount = () => {
    const valIdx = (nums.indexOf(val));
    if (valIdx > 0) return valIdx;
    if (valIdx === 0) return 0;
    if (valIdx < 0) return nums.length;
  }

    return getCount();
};

// Оптимальный вариант
// Временная сложность: O(n) - один проход по массиву
const removeElement2 = function(nums, val) {
  let k = 0; // отслеживает индекс, куда будет помещен следующий элемент, НЕ равный val
  // По сути, k указывает на границу между "хорошими" элементами (оставшимися) и остальной частью массива

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) { // встретили "правильное" значение, не равное val
      [nums[k], nums[i]] = [nums[i], nums[k]]; // "правильное" значение помещаем в свободный зарезервированный слот
      k = k + 1; // увеличиваем счетчик - открытый слот-индекс для следующего "правильного" значения
    }
  }

  return k;
// Возвращает количество элементов, не равных val
// Это также длина "очищенной" части массива
};

// Алгоритм работает корректно потому, что:

// Все элементы слева от k уже проверены и гарантированно не равны val
// - Все элементы между k и i гарантированно равны val (иначе они были бы перемещены влево)
// - Элемент, который попадает на позицию i после обмена, уже был проверен ранее (когда находился на позиции k)
// - Поэтому можно безопасно увеличивать i на каждой итерации без дополнительных проверок.

const nums = [2]; // Input array
const val = 3; // Value to remove

const nums2 = [3,2,2,3];
const val2 = 3;

console.log('Первый тест', removeElement(nums, val), nums);
console.log('Второй тест', removeElement(nums2, val2), nums2);

console.log('Первый тест', removeElement2(nums, val), nums);
console.log('Второй тест', removeElement2(nums2, val2), nums2);
