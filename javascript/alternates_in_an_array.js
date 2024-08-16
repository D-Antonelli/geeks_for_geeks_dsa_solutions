// https://www.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1

class Solution {
  print(arr) {
    let o = [];
    for (let i = 0; i < arr.length; i += 2) {
      o.push(arr[i]);
    }
    console.log(o.join(" "));
  }
}
