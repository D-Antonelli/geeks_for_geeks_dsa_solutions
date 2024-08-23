// https://www.geeksforgeeks.org/problems/count-smaller-elements2214/1

// fail test case: needs optimisation with time complexity
class Solution {
  // Function to construct a lower array.
  constructLowerArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length - 1) {
        arr[i] = 0;
        break;
      }
      let curr = arr[i];
      let count = 0;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < curr) {
          count++;
        }
      }

      arr[i] = count;
    }

    return arr;
  }
}
