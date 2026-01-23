'use strict';

// Перевернуть строку на месте

const reverseString = (s) => {
  const length = s.length;
  const mid = Math.floor(length/2);

  for (let i = 0; i < mid; i++) {
    [s[i], s[length-i-1]] = [s[length-i-1], s[i]];
  }
    
};

const string = ["h","e","l","l","o"]
const string1 = ["h","e","l","l","o", "!"]
reverseString(string)
reverseString(string1)
console.log(string, string1)

// Но правильно решить эту задачу нужно с помощбю алгоритма ДВА УКАЗАТЕЛЯ
// Алгоритм "Двух указателей":
// Идея:
// Идем с двух концов массива к центру

// На каждом шаге меняем местами элементы

// Встречаемся в середине и останавливаемся


const reverseStringWithTwoPoints = (s) => {
  let left = 0;
  let right = s.length - 1;
  
  while(left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    
    left++;
    right--;
  }
};

const string3 = ["h","e","l","l","o"]
const string4 = ["h","e","l","l","o", "!"]
reverseStringWithTwoPoints(string3)
reverseStringWithTwoPoints(string4)
console.log(string3, string4)