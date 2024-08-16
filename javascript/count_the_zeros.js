// https://www.geeksforgeeks.org/problems/count-the-zeros2550/1

// binary search can be implemented to improve time complexity
class Solution {
  countZeroes(arr) {
    let sum = 0;
    let l = arr.length;

    if (arr[l - 1] == 1) {
      return 0;
    }

    if (arr[0] == 0 && arr[l - 1] == 0) {
      return l;
    }

    for (let i = 0; i < l; i++) {
      if (arr[i] == 0) {
        sum = l - i;
        break;
      }
    }

    return sum;
  }
}
