// https://www.geeksforgeeks.org/problems/index-of-first-1-in-a-sorted-array-of-0s-and-1s4048/1

class Solution {
  firstIndex(arr) {
    return arr.findIndex((ele) => ele == 1);
  }
}
