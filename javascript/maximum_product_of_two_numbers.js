/**
 * @param {number[]} nums
 * @return {number}
 */

// Time complexity: O(logN)
var maxProduct = function (nums) {
  let sNums = nums.toSorted((a, b) => b - a);
  return (sNums[0] - 1) * (sNums[1] - 1);
};
