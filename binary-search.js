'use strict';

// Разделяй и властвуй!
// O(log)
 
const binarySearch = (arr, search) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start)/2);

    if (arr[mid] === search) return mid;

    if (search > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;   
}

console.log(binarySearch([1,2,3,4,5,6], 6));
