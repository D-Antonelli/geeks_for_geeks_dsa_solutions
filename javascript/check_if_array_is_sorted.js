// https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1

class Solution {
  arraySortedOrNot(arr) {
    if (arr.length == 1) {
      return true;
    }
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }

    return true;
  }
}
