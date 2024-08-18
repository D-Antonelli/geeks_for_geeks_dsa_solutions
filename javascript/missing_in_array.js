// https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1

class Solution {
  // Note that the size of the array is n-1
  missingNumber(n, arr) {
    arr.sort((a, b) => a - b); // sort in ascending order

    for (let i = 0; i < n; i++) {
      if (arr[i] !== i + 1) {
        return i + 1;
      }
    }
  }
}
