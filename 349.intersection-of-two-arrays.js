/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const uniqueValues = Array.from(new Set(nums1));
  const result = [];

  for (let i = 0; i < uniqueValues.length; i++) {
    if (nums2.includes(uniqueValues[i])) {
      result.push(uniqueValues[i])
    }
  }

  return result
};
