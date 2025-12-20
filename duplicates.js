// Передается сортированный массив чисел. Требуется удалить дубли на месте и вернуть размер без дублей.
// Дубли переместить в конец массива.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length === 1) return 1;
  
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
  
};
const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums), nums);


// В массиве все нули переместить в конец, не нарушая структуру массива для остальных элементов
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  if (nums.length === 0) return;
  
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      index++;
    }
  }
};

const nums1 = [0,1,0,3,12];
moveZeroes(nums1);
console.log(nums1)