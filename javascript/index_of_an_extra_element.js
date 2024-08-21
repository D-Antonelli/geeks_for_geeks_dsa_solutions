// https://www.geeksforgeeks.org/problems/index-of-an-extra-element/1?track=amazon-searching&batchId=192

class Solution {
  findExtra(n, arr1, arr2) {
    for (let i = 0; i < n; i++) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
  }
}
