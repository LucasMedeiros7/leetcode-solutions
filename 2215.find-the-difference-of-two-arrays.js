// 2215. Find the Difference of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let n1 = new Set(nums1);
  let n2 = new Set(nums2);

  for (let i = 0; i < nums1.length; i++) {
    if (n2.has(nums1[i])) n2.delete(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (n1.has(nums2[i])) n1.delete(nums2[i]);
  }

  return [Array.from(n1), Array.from(n2)];
};