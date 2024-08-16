// https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1

/**
 For Input: 
1 0
Your Code's output is: 
-1
It's Correct output is: 
1
Output Difference
-1
**/

class Solution {
  // Function to find equilibrium point in the array.
  equilibriumPoint(arr) {
    let left = 0; //left sum
    let right = 0; // right sum
    let pointer = 0;
    let l = arr.length;

    if (l == 1) {
      return arr[0];
    }

    while (pointer < l) {
      left += arr[pointer];
      let i = l - 1;

      while (i > pointer) {
        right += arr[i];
        i--;
      }

      if (left == right) {
        return pointer + 1;
      }

      right = 0;
      pointer++;
    }

    return -1;
  }
}
