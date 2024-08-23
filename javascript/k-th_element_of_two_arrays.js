// https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1

/**
 * @param {number} k
 * @param {number[]} arr1
 * @param {number[]} arr2

 * @returns {number}
 */

class Solution {
  kthElement(k, arr1, arr2) {
    let i = 0;
    let j = 0;

    let sorted = [];
    let iterate = true;

    while (iterate) {
      if (j == arr2.length && i < arr1.length) {
        sorted.push(arr1[i]);
        i++;
      } else if (i == arr1.length && j < arr2.length) {
        sorted.push(arr2[j]);
        j++;
      } else if (i == arr1.length && j == arr2.length) {
        iterate = false;
      } else if (arr1[i] < arr2[j]) {
        sorted.push(arr1[i]);
        i++;
      } else if (arr2[j] < arr1[i]) {
        sorted.push(arr2[j]);
        j++;
      } else if (arr1[i] == arr2[j]) {
        sorted.push(arr1[i]);
        sorted.push(arr2[j]);
        i++;
        j++;
      }
    }

    return sorted[k - 1];
  }
}
