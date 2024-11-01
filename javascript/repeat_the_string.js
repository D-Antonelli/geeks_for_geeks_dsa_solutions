// https://www.geeksforgeeks.org/problems/repeat-the-strings/1?track=python-module-3&batchId=119

class Solution {
  //Function to join given strings
  comboString(a, b) {
    let shorter = a.length < b.length ? a : b;
    let longer = shorter === a ? b : a;

    return shorter + longer + shorter;
  }
}
