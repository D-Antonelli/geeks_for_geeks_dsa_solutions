// https://www.geeksforgeeks.org/problems/check-string1818/0

class Solution {
  check(s) {
    let firstChar = s[0];

    for (let i = 0; i < s.length; i++) {
      if (s[i] !== firstChar) {
        return false;
      }
    }
    return true;
  }
}
