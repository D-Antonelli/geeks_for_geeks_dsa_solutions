// https://www.geeksforgeeks.org/problems/alone-in-couple5507/1

class Solution {
  findSingle(n, arr) {
    arr.sort((a, b) => a - b);

    let unique = arr[n - 1]; // worst case is last element

    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] !== arr[i + 1]) {
        unique = arr[i];
        break;
      }
    }

    return unique;
  }
}
