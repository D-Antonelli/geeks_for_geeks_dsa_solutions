// https://www.geeksforgeeks.org/problems/bubble-sort/1

class Solution {
  //Function to sort the array using bubble sort algorithm.
  bubbleSort(arr, n) {
    let i = 0;
    let swaps = 0;

    if (n == 1) {
      return arr;
    }

    while (true) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      } else {
        swaps++;
      }

      if (swaps == n - 1) {
        // all elements are sorted
        break;
      }

      if (i == n - 2) {
        i = 0;
        swaps = 0;
      } else {
        i++;
      }
    }
  }
}
