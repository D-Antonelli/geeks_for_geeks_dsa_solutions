// https://www.geeksforgeeks.org/problems/pangram-checking-1587115620/1

class Solution {
  //Function to check if a string is Pangram or not.
  checkPangram(s) {
    // A-Z -> 65 - 90
    const codes = new Array(26).fill(-1);
    let S = s.toUpperCase();

    for (let i = 0; i < S.length; i++) {
      let charCode = S.charCodeAt(i);
      if (charCode >= 65 && charCode <= 97) {
        codes[charCode - 65] = charCode;
      }
    }

    if (codes.includes(-1)) {
      return false;
    }

    return true;
  }
}
