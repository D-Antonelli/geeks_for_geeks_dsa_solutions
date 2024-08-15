// https://www.geeksforgeeks.org/problems/product-of-maximum-in-first-array-and-minimum-in-second3943/0

class Solution {
  findMultiplication(arr1, arr2) {
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => a - b);

    return arr1[0] * arr2[0];
  }
}
