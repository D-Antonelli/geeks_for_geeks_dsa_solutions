// https://www.geeksforgeeks.org/problems/sum-of-middle-elements-of-two-sorted-arrays2305/1

class Solution {
  SumofMiddleElements(arr1, arr2) {
    let size = arr1.length;
    if (size == 1) {
      return arr1[0] + arr2[0];
    }

    let merged = [...arr1, ...arr2];
    merged.sort((a, b) => a - b);

    return merged[size - 1] + merged[size];
  }
}
