
const quickSort = (arr) => {
  const length = arr.length;
  if (length < 2) return [...arr];

  const left = [];
  const right = [];
  const equal = [arr[0]]; // Следует ввести на случай,
  // если в массиве много или только одинаковые значения
  
  const pivot = arr[0];

  for (let i = 1; i < length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    
    if (arr[i] >= pivot) {
      right.push(arr[i]);
    }

    if (arr[i] === pivot) {
      equal.push(arr[i]);
    }

  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Пример использования
const array2 = [64, 12, 34, 25, 12, 12, 22, 11, 90, 12];
console.log(quickSort(array2), array2); // [11, 12, 22, 25, 34, 64, 90]