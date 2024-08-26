// https://www.geeksforgeeks.org/problems/majority-element-1587115620/1?track=amazon-searching&batchId=192

class Solution {
  majorityElement(a, size) {
    let c = a[0]; // current
    let r = 1; // repeated
    let max = size / 2;

    if (size == 1) {
      return c;
    }

    a.sort((a, b) => a - b);

    for (let i = 1; i < size; i++) {
      if (a[i] == c) {
        r++;

        if (r > max) {
          return a[i];
        }
      } else {
        c = a[i];
        r = 1;
      }
    }

    return -1;
  }
}
