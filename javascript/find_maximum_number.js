// time comlexity O(log(N))

class Solution {
  //Function to find the maximum number.
  findMax(N) {
    return N.split("")
      .sort((a, b) => b - a)
      .join("");
  }
}
