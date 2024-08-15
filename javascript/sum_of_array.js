// https://www.geeksforgeeks.org/problems/sum-of-array2326/1

class Solution {
  sum(arr) {
    let sum = 0;

    for (let num of arr) {
      sum += num;
    }

    return sum;
  }
}
