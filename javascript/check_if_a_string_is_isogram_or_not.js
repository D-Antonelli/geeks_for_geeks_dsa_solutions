// https://www.geeksforgeeks.org/problems/check-if-a-string-is-isogram-or-not-1587115620/0

class Solution {
  //Function to check if a string is Isogram or not.
  isIsogram(s) {
    return this.checkIsogram(s);
  }

  checkIsogram(s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
      if (!map.has(s[i])) {
        map.set(s[i], i);
      } else {
        return false;
      }
    }
    return true;
  }
}
