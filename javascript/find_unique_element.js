// https://www.geeksforgeeks.org/problems/find-unique-element2632/1

class Solution {
  findUnique(k, arr) {
    let l = 0, // left pointer
      r = 1, // right pointer
      t = k, // total
      u = -1; // current

    arr.sort();

    while (l < arr.length) {
      if (arr[l] == arr[r]) {
        t--;
        r++;
        continue;
      }

      if (arr[l] !== arr[r] && t !== 1) {
        u = arr[l];
        break;
      }

      if (arr[l] !== arr[r]) {
        l = r;
        t = k;
      }
    }

    return u;
  }
}
