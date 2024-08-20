// https://www.geeksforgeeks.org/problems/greater-on-right-side4305/1

class Solution {
  nextGreatest(arr) {
    let hi = -1; // highest index

    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length - 1) {         // last element
        arr[i] = -1;
        break;
      }

      if (i !== hi && i < hi) {
        arr[i] = arr[hi];
        continue;
      }

      let h = 0; // highest number
      let j = i + 1;

      while (j < arr.length) {
        if (arr[j] > h) {
          h = arr[j];
          hi = j;
        }
        j++;
      }

      arr[i] = h;
    }

    return arr;
  }
}
