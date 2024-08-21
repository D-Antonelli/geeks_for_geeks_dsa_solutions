// https://www.geeksforgeeks.org/problems/find-the-median0527/1

class Solution {
  find_median(arr) {
    arr.sort((a, b) => a - b);
    let mid = Math.floor((arr.length - 1) / 2);

    return arr.length % 2 == 0 ? this.avr(arr, mid) : arr[mid];
  }

  avr(arr, mid) {
    return Math.floor((arr[mid + 1] + arr[mid]) / 2);
  }
}
