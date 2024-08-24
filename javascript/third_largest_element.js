// https://www.geeksforgeeks.org/problems/third-largest-element/1?track=amazon-arrays&batchId=192

class Solution {
  thirdLargest(arr) {
    if (arr.length < 3) {
      return -1;
    }

    arr.sort((a, b) => b - a);

    return arr[2];
  }
}
