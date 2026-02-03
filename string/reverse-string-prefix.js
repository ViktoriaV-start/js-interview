'use strict';

// Дана строка s и число k, требуется поменять местами первые k символов

// O(K)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reversePrefix = (s, k) => {
    let left = 0;
    let right = k - 1;

    const arr = Array.from(s);

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return arr.join('');
};

console.log(reversePrefix('abcdf', 3));
