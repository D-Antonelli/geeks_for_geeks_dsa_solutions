// https://www.geeksforgeeks.org/problems/replace-all-0s-with-5/1?track=amazon-arrays&batchId=192

class Solution {
  convertFive(num) {
    let str = String(num);
    let arr = new Array(str.length);

    for (let i = 0; i < str.length; i++) {
      if (str[i] == "0") {
        arr[i] = 5;
      } else {
        arr[i] = str[i];
      }
    }

    return arr.join("");
  }
}
