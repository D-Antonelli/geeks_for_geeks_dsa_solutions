// https://www.geeksforgeeks.org/problems/buildings-receiving-sunlight3032/1

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  // Function to find length of longest subarray of consecutive integers.
  longest(arr) {
    let count = 1; // first building always faces sun
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= max) {
        count++;
        max = arr[i];
      }
    }

    return count;
  }
}
