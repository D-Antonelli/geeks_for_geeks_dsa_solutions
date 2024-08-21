// https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1?track=sp-arrays-and-searching&batchId=152

class Solution {
  rotateArr(arr, d, n) {
    // inefficient algorithm - needs optimisation
    d = d >= n ? d % n : d; // if rotation is bigger than total number of elements

    for (let i = 0; i < d; i++) {
      arr.push(arr[i]);
    }

    for (let i = 0; i < d; i++) {
      arr.shift();
    }
  }
}
