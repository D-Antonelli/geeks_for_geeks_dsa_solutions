// https://www.geeksforgeeks.org/problems/first-repeating-element4018/1

class Solution {
  // Function to return the position of the first repeating element.
  firstRepeated(arr) {
    let map = new Map();
    let repeating = -1;

    if (arr.length == 1) {
      return repeating;
    }

    for (let num of arr) {
      if (!map.has(num)) {
        map.set(num, 1);
      } else {
        let count = map.get(num);
        count++;
        map.set(num, count);
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (map.has(arr[i]) && map.get(arr[i]) > 1) {
        repeating = i + 1;
        break;
      }
    }

    return repeating;
  }
}
