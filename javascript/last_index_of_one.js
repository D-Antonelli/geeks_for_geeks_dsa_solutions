// https://www.geeksforgeeks.org/problems/last-index-of-15847/1

class Solution {
  lastIndex(S) {
    let inx = -1;

    for (let i = 0; i < S.length; i++) {
      if (S[i] === "1") {
        inx = i;
      }
    }
    return inx;
  }
}
