'use strict';

// Дана строка слов с пробелами и паттерн вида 'abba', нужно сравнить паттерн со строкой и убедиться,
// что строка соответсвует заданному паттерну - буква - это уникальное слово, другая буква - другое слово

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
  const arr = s.split(' ');
  const patternLength = pattern.length;

  if (arr.length !==  patternLength) return false;

  const map = new Map();

  for (let i = 0; i < patternLength; i++) {
    if (!map.has(pattern[i])) {

      const values = Array.from(map.values());
      
      if (!values.includes(arr[i])) {
        map.set(pattern[i], arr[i]);
      } else {
        return false;
      }

      continue;
    }

    if (map.get(pattern[i]) !== arr[i]) {
      return false;
    }

  }

  return true;

    
};

const string = "dog arr arr dog"
const pattern = 'abba';

const string1 = "dog dog dog dog"
const pattern1 = 'abba';

console.log(wordPattern(pattern, string))
console.log(wordPattern(pattern1, string1))
