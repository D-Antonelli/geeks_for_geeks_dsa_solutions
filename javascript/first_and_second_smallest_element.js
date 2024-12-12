// https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1

class Solution {
  minAnd2ndMin(arr) {
    if (arr.length < 2) {
      return [-1];
    }

    let s1 = arr[0],
      s2 = arr[1];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== s1 && arr[i] !== s2) {
        let min1 = Math.min(arr[i], Math.max(s1, s2));
        let min2 = Math.min(s1, s2);

        s1 = Math.min(min1, min2);
        s2 = Math.max(min1, min2);
      }
    }

    if (s1 === s2) {
      return [-1];
    } else {
      return [s1, s2];
    }
  }
}
