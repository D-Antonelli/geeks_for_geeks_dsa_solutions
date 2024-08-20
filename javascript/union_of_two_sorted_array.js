// https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1?track=amazon-arrays&batchId=192

class Solution {
  //Function to return a list containing the union of the two arrays.
  findUnion(arr1, arr2, n, m) {
    let arr = [];

    let l = Math.min(n, m); // min length
    let r = Math.max(n, m) - l + 1; // index of rest of array elements

    for (let i = 0; i < l; i++) {
      // compare small with big array
      if (arr1[i] == arr2[i]) {
        arr.push(arr1[i]);
      }
    }

    for (r; r < Math.max(n, m); r++) {
      // iterate over rest of array
      if (arr1[r] && arr1[r] !== arr1[r + 1]) {
        arr.push(arr1[r]);
      } else if (arr2[r] && arr2[r] !== arr2[r + 1]) {
        arr.push(arr2[r]);
      }
    }

    return arr;
  }
}
