// https://www.geeksforgeeks.org/problems/count-odd-even/1

class Solution {
  countOddEven(arr) {
    let c1 = 0; // count even
    let c2 = 0; // count odd

    for (let ele of arr) {
      if (ele % 2 == 0) {
        c2++;
      } else {
        c1++;
      }
    }

    console.log(`${c1} ${c2}`);
  }
}
