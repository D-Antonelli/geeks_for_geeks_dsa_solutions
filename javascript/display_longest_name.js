// https://www.geeksforgeeks.org/problems/display-longest-name0853/1

class Solution {
  longest(names) {
    let max = 0,
      inx = -1;

    for (let i = 0; i < names.length; i++) {
      if (names[i].length > max) {
        max = names[i].length;
        inx = i;
      }
    }

    return names[inx];
  }
}
