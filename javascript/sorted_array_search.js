// https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1

class Solution {
  searchInSorted(arr, N, K) {
    let start = 0;
    let end = N - 1;

    while (start <= end && end >= 0) {
      let half = start + Math.floor((end - start) / 2);

      if (arr[half] == K) {
        return 1;
      }

      if (K > arr[half]) {
        start = half + 1;
      }

      if (K < arr[half]) {
        end = half - 1;
      }
    }

    return -1;
  }
}
