// https://www.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1?track=ppc-arrays&batchId=221

class Solution {
  // Function to remove duplicates from the given array.
  remove_duplicate(arr) {
    // Code Here
    arr.sort((a, b) => a - b);

    let l = 0;
    let r = 1;

    let u = [];

    while (l < arr.length && r < arr.length) {
      if (arr[l] == arr[r]) {
        r++;
      } else if (arr[l] !== arr[r]) {
        u.push(arr[l]);
        r = l;
      }
    }

    arr = u;
    return u.length;
  }
}
