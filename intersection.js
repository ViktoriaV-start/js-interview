'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return Array.from(set1.intersection(set2));
};
const nums1 = [4,9,5, 33];
const nums2 = [9,4,9, 33,8,4];

console.log(intersection(nums1, nums2));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersectionCustom = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();
  
  for (let elem of nums2) {
    if (set1.has(elem)) {
      result.add(elem);
    }
  }
  
  return Array.from(result);
};

console.log(intersectionCustom(nums1, nums2));
