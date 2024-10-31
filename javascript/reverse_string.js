// https://www.geeksforgeeks.org/problems/reverse-a-string/1?track=DSA-Foundation-Final-String&batchId=193

class Solution {
  reverseString(s) {
    let reversed = "";

    for (let i = s.length - 1; i >= 0; i--) {
      reversed += s[i];
    }

    return reversed;
  }
}
