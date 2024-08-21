// https://www.geeksforgeeks.org/problems/find-transition-point-1587115620/0

class Solution {
  transitionPoint(arr, n) {
    // o(N) time complexity
    return arr.findIndex((ele) => ele === 1);
  }
}
