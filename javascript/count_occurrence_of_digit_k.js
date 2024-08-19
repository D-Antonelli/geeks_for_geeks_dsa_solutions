// https://www.geeksforgeeks.org/problems/find-number-of-numbers/1

class Solution {
  num(k, arr) {
    let occ = 0;

    for (let num of arr) {
      if (num == k) {
        occ++;
      }

      while (num >= 10) {
        let rem = num % 10;

        if (rem == k) {
          occ++;
        }

        num = Math.floor(num / 10);

        if (num == k) {
          occ++;
        }
      }
    }

    return occ;
  }
}
