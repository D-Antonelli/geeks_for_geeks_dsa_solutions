// https://www.geeksforgeeks.org/problems/subarray-range-with-given-sum2804/0


// time complexity can be improved
class Solution {
  subArraySum(arr, k) {
    let arrs = 0;

    for (let i = 0; i < arr.length; i++) {
      let sum = arr[i];

      if (arr[i] == arr.length - 1) {
        break;
      }

      for (let j = i + 1; j < arr.length; j++) {
        if (sum == k) {
          arrs++;
        }

        sum += arr[j];
      }

      if (sum == k) {
        arrs++;
      }

      sum = 0;
    }

    return arrs;
  }
}
