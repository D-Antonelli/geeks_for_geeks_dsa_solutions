// https://www.geeksforgeeks.org/problems/balanced-array07200720/1

class Solution {
  // Function to find the minimum value required to balance the array.
  minValueToBalance(arr) {
    let l = arr.length,
      mid = l / 2,
      p1 = 0,
      p2 = mid,
      sum1 = 0,
      sum2 = 0;

    for (p1; p1 < mid; p1++) {
      sum1 += arr[p1];
    }

    for (p2; p2 < l; p2++) {
      sum2 += arr[p2];
    }

    return Math.max(sum1, sum2) - Math.min(sum1, sum2);
  }
}
