'use strict';

// В строке поменять местами только гласные и вернуть новую строку

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vowels = new Set('aeiouyAEIOUY');

    const arr = Array.from(s);
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
      if (!vowels.has(arr[left])) {
        left++;
        continue;
      }

      if (!vowels.has(arr[right])) {
        right--;
        continue;
      }

      if (vowels.has(arr[left]) && vowels.has(arr[right])) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
      }
      right--;
      left++;

    }
    return arr.join('');
};

const string = "IceCreAm"

console.log(reverseVowels(string) )
