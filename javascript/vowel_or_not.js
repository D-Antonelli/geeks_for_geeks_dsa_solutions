// https://www.geeksforgeeks.org/problems/vowel-or-not0831/1

class Solution {
  isVowel(c) {
    let map = new Map([
      ["a", "a"],
      ["e", "e"],
      ["i", "i"],
      ["o", "o"],
      ["u", "u"],
    ]);

    if (map.has(c.toLowerCase())) {
      return "YES";
    } else {
      return "NO";
    }
  }
}
