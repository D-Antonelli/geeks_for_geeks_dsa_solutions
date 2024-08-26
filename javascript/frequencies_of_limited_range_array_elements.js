// https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1

class Solution {
  frequencyCount(arr, N, P) {
    let res = new Array(N).fill(0);

    for (let i = 0; i < N; i++) {
      if (arr[i] - 1 < N) {
        res[arr[i] - 1]++;
      }
    }

    for (let i = 0; i < N; i++) {
      arr[i] = res[i];
    }
  }
}
