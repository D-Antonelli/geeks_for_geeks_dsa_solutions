// https://www.geeksforgeeks.org/problems/find-duplicates-in-an-array/1?track=amazon-arrays&batchId=192

class Solution {
  duplicates(a, n) {
    a.sort((a, b) => a - b);
    let map = new Map();
    let d = [];

    for (let i = 0; i < n; i++) {
      if (!map.has(a[i])) {
        map.set(a[i], 1);
      } else {
        let count = map.get(a[i]);
        count++;
        map.set(a[i], count);
      }
    }

    for (let num of a) {
      if (map.has(num) && map.get(num) > 1) {
        d.push(num);
        map.set(num, -1);
      }
    }

    return d || -1;
  }
}
