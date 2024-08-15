// https://www.geeksforgeeks.org/problems/maximum-value-in-a-bitonic-array3001/1?page=1&company%5B%5D=Amazon&curated%5B%5D=8&sortBy=submissions

class Solution {
  findMaximum(arr, n) {
    arr.sort((a, b) => b - a);
    return arr[0];
  }
}
