// https://www.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-different-sizes/1

class Solution {
  MedianOfArrays(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    let merged = [];
    let iterate = true;

    while (iterate) {
      if (p1 >= arr1.length && p2 >= arr2.length) {
        iterate = false;
        break;
      }

      if (p1 >= arr1.length) {
        merged.push(arr2[p2]);
        p2++;
      } else if (p2 >= arr2.length) {
        merged.push(arr1[p1]);
        p1++;
      } else if (arr1[p1] < arr2[p2]) {
        merged.push(arr1[p1]);
        p1++;
      } else if (arr1[p1] == arr2[p2]) {
        merged.push(arr1[p1]);
        merged.push(arr2[p2]);
        p1++;
        p2++;
      } else if (arr1[p1] > arr2[p2]) {
        merged.push(arr2[p2]);
        p2++;
      }
    }

    if (merged.length % 2 != 0) {
      let mid = Math.floor(merged.length / 2);
      return merged[mid];
    } else {
      let mid = merged.length / 2;
      let median = (merged[mid] + merged[mid - 1]) / 2;
      return median;
    }
  }
}
