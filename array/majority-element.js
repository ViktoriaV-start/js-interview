// Определить, какой элемент встречается чаще всего в массиве

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const map = new Map();

  for (let elem of nums) {
    if (map.has(elem)) {
      map.set(elem, map.get(elem) +1);
    } else {
      map.set(elem, 1);
    }
  }

  const arr = Array.from(map.entries());

  return arr.reduce((acc, elem) => {
    console.log(acc, elem)
    if (acc[1] < elem[1]) {
      return elem;
    }

    return acc;
  })[0];
};

const arr = [6,5,5];

console.log(majorityElement(arr));


// Улучшенный вариант
const majorityElementNew = function(nums) {
  const map = new Map();
  let maxCount = 0;
  let result = nums[0]; // на случай пустого массива нужно добавить проверку

  for (let num of nums) {
    const count = (map.get(num) || 0) + 1;
    map.set(num, count);
    
    if (count > maxCount) {
      maxCount = count;
      result = num;
    }
  }
  
  return result;
};