// https://www.geeksforgeeks.org/problems/find-index4752/1?page=1&difficulty%255B%255D=-2&status%255B%255D=unsolved&sortBy=submissions

class Solution {
  findIndex(arr, key) {
    let l = arr.length;
    if (l < 1) {
      // array has one element
      return arr[0] == key ? [0, 0] : [-1, -1];
    }

    let first = -1;
    let last = -1;

    for (let i = 0; i < l; i++) {
      if (arr[i] == key && first == -1) {
        first = i;
        continue;
      }

      if (arr[i] == key) {
        last = i;
      }
    }

    if (first !== -1 && last == -1) {
      // element appears once
      last = first;
    }

    return [first, last];
  }
}
