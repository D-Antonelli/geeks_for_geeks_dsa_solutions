// https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  // Function to reverse words in a given string.
  reverseWords(s) {
    let output = "";

    let arr = s.trim().split(" ");

    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].length > 0) {
        output += `${arr[i].trim()} `;
      }
    }

    return output.trim();
  }
}
