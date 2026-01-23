'use strict';

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const thirdMax = (nums) => {
//   if (nums.length === 1) return nums[0];
//
//   const sortedArray = nums.toSorted((a, b) => b - a);
//   const distinctValues = Array.from(new Set(sortedArray));
//   const result = distinctValues[2] !== undefined ? distinctValues[2] : distinctValues[0];
//
//   return result;
// };

// Найти 3-ий максимум в массиве чисел. Если нет 3-го - вернуть первый максимум

// В задачах, где нужно найти k й наибольшее/наименьшее число,
// мы всегда можем начать с использования любого из этих трех методов:
// - сортировки массива
// - использования приоритетной очереди или
// - использования отсортированного набора Set.
/**
 * @param {number[]} nums
 * @return {number}
 */
let thirdMax = function(nums) {
    // Sort the array in non-increasing order.
    nums.sort((a, b) => b - a);

    let elemCounted = 1;
    let prevElem = nums[0];

    for (let index = 1; index < nums.length; ++index) {
        // Current element is different from previous.
        if (nums[index] != prevElem) {
            elemCounted += 1;
            prevElem = nums[index];
        }

        // If we have counted 3 numbers then return current number.
        if (elemCounted == 3) {
            return nums[index];
        }
    }

    // We never counted 3 distinct numbers, return largest number.
    return nums[0];
};


// Complexity Analysis
// If N is the number of elements in the input array.

// Time complexity: O(NlogN).

// We sort the nums array, which takes O(NlogN) time.
// We iterate on the nums array once to find the 3 
// rd
//   distinct number.
// Thus, overall it takes, O(NlogN+N)=O(NlogN) time.