// https://www.geeksforgeeks.org/problems/longest-substring-containing-1/1

class Solution {
  maxLength(S) {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < S.length; i++) {
      if (S[i] === "1") {
        sum++;
        max = Math.max(max, sum);
      } else {
        sum = 0;
      }
    }

    return max;
  }
}
