// https://www.geeksforgeeks.org/problems/print-table0303/1?problemStatus=unsolved&difficulty%5B%5D=-2&page=1&query=problemStatusunsolveddifficulty%5B%5D-2page1

class Solution {
  getTable(N) {
    let min = 1;
    let max = 10;
    let i = 0;
    let table = new Array(max);

    while (i < max) {
      table[i] = N * min;

      min++;
      i++;
    }

    return table;
  }
}
