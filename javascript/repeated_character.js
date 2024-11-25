// https://www.geeksforgeeks.org/problems/repeated-character2058/1

class Solution {
  firstRep(s) {
    let map = new Map();
    let r = -1; // first repeating letter

    for (let i = 0; i < s.length; i++) {
      if (!map.has(s[i])) {
        map.set(s[i], i);
      } else {
        if (r === -1) {
          r = s[i];
        } else {
          if (map.get(s[i]) < map.get(r)) {
            r = s[i];
          }
        }
      }
    }

    return r;
  }
}
