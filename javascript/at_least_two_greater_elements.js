// https://www.geeksforgeeks.org/problems/at-least-two-greater-elements4625/1

class Solution {
  findElements(arr) {
    let res = [...arr];
    res.sort((a, b) => a - b); // sort in ascending order

    res.pop(); // deletion of last element is o(1) time
    res.pop();

    return res;
  }
}
