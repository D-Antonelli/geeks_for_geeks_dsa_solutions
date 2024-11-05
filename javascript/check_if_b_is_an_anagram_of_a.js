// https://www.geeksforgeeks.org/problems/anagram-1587115620/1?track=DSA-Foundation-Final-String&batchId=193

class Solution {
  // Function is to check whether two strings are anagram of each other or not.
  areAnagrams(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }

    let str1 = s1.split("").sort().join("");
    let str2 = s2.split("").sort().join("");

    return str1 === str2;
  }
}
