// https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1

class Solution {
  kthSmallest(arr, k) {
    let vector = [];

    for (let i = 0; i < arr.length; i++) {
      vector[arr[i]] = arr[i];
    }

    vector = vector.filter((ele) => ele !== undefined);

    return vector[k - 1];
  }
}
