// https://www.geeksforgeeks.org/problems/immediate-smaller-element1142/1

/**
 * @param {number[]} arr
 * @param {number} n
 */

class Solution {
  immediateSmaller(arr, n) {
    for (let i = 0; i < n; i++) {
      if (i == n - 1) {
        arr[i] = -1;
      } else if (arr[i + 1] < arr[i]) {
        arr[i] = arr[i + 1];
      } else {
        arr[i] = -1;
      }
    }
  }
}
