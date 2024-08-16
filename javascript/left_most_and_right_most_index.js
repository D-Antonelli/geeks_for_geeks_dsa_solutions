// https://www.geeksforgeeks.org/problems/find-first-and-last-occurrence-of-x0849/1

class Solution {
  indexes(v, x) {
    let left = 0;
    let right = v.length - 1;
    let res = [-1, -1];

    while (right >= left) {
      if (v[left] == x) {
        res[0] = left;
      }

      if (v[right] == x) {
        res[1] = right;
      }

      if (res[0] !== -1 && res[1] !== -1) {
        return res;
      }

      if (res[0] == -1) {
        left++;
      }

      if (res[1] == -1) {
        right--;
      }
    }

    return res;
  }
}
