// https://www.geeksforgeeks.org/problems/count-the-zeros2550/1

// O(n) time complexity
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


// O(logN) time complexity
class Solution {
  countZeroes(arr) {
    if (arr[0] == 0) {
      return arr.length;
    }

    if (arr[arr.length - 1] == 1) {
      return 0;
    }

    // binary search
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (end >= start) {
      mid = start + Math.floor((end - start) / 2);

      if (arr[mid] == 0) {
        if (arr[mid - 1] == 0) {
          end = mid - 1;
        } else {
          break;
        }
      } else if (arr[mid] == 1) {
        start = mid + 1;
      }
    }

    return arr.length - mid;
  }
}
