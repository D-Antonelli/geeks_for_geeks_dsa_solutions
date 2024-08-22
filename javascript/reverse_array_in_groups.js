// https://www.geeksforgeeks.org/problems/reverse-array-in-groups0255/1

class Solution {
  /**
    * @param number[] arr
    * @param number k

    * @returns none
    */
  reverseInGroups(arr, k) {
    if (k >= arr.length) {
      this.reverse(0, arr.length - 1, arr);
    } else {
      let r = arr.length % k; // remainder after subarrays
      let j = arr.length - r; // start index for remainder

      for (let i = 0; i < j; i += k) {
        let start = i;
        let end = i + k - 1;
        this.reverse(start, end, arr);
      }

      this.reverse(j, arr.length - 1, arr);
    }

    console.log(arr.join(" "));
  }

  reverse(start, end, arr) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    }
  }
}
