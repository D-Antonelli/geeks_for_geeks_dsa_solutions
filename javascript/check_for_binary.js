// https://www.geeksforgeeks.org/problems/check-for-binary/0

class Solution {
  isBinary(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== "1" && str[i] !== "0") {
        return false;
      }
    }
    return true;
  }
}
