'use strict';
// Найти общий префикс, самый длинный, для строк в массиве

// В начале установить prefix равным первому элементу.
// Далее цикл for начинать с элемента с index = 1.
// Для каждого элемента в цикле установить цикл while,
// где проверяем, начинается ли текущий элемент с префикса.
// Если нет - сократить на каждой итерации цикла while на один последний символ prefix = prefix.slice(0, -1);
// Если условие arr[i].startsWith(prefix) в цикле while выполняется - перейти к следующему элементу в массиве.

// Временная сложность: O(n * m), где:
// n - количество строк в массиве
// m - длина первой строки (максимальная возможная длина префикса)
// Худшая: O(n⋅m-в-квадрате2)


const longestCommonPrefix = (arr) => {
  const length = arr.length;
  if (!length) return '';
  let prefix = arr[0];
  
  for (let i = 1; i < length; i++) {
    if (!prefix.length) {
      return '';
    }
    
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))

// Оптимизированный вариант
// Префикс устанавливаем как пустая строка.
// За вариант для префикса также принимаем первый элемент массива.
// Далее в цикле for идем по каждому символу первого элемента и
// во вложенном цикле проверяем для каждого элемента массива, начиная с idx=1,
// что на позиции этого символа в слове стоит такой же символ


const findLongestPrefix = (arr) => {
  if (!arr.length) return '';
  
  let prefix = '';
  
  for (let i = 0; i < arr[0].length; i++) {
    const char = arr[0][i];
    
    // Проверяем, что у всех строк есть этот символ на позиции i
    for (let j = 1; j < arr.length; j++) {
      if (arr[j][i] !== char) {
        return prefix;
      }
    }
    
    prefix += char;
  }
  
  return prefix;
};


