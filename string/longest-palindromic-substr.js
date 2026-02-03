'use strict';

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    let count = 0;
    let current = null;
    let idx = 0;



    let left = [];
    let right = [];

    for (let i = 0; i < s.length; i++) {
      left.push(s[i]);
      right.push(s[i]);

      if (left.join('') === right.reverse().join('') && count < left.length) {
        current = left.join('');
        count = left.length;
        i = idx;
        idx;
        left = [];
        right = [];
      }

return current;
    }
};

console.log(longestPalindrome('abads'));
