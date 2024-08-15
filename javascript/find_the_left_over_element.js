// https://www.geeksforgeeks.org/problems/print-the-left-element2009/1

class Solution {
  leftElement(arr) {
    let l = arr.length;

    let mid = l % 2 == 0 ? l / 2 - 1 : Math.floor(l / 2);

    arr.sort((a, b) => a - b);

    return arr[mid];
  }
}
