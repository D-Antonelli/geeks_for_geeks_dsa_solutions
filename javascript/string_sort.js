// https://www.geeksforgeeks.org/problems/sort-a-string2943/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  //Function to sort the given string.
  sort(s) {
    let arr = s.split("");
    arr.sort();
    return arr.join("");
  }
}
