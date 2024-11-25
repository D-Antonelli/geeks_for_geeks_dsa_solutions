// https://www.geeksforgeeks.org/problems/remove-b-and-ac-from-a-given-string4336/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

// o(|s|) space
class Solution {
  stringFilter(str) {
    let r = "";

    let i = 0;

    while (i < str.length) {
      if (str[i] == "b") {
        i++;
      } else if (i !== str.length - 1 && str[i] === "a" && str[i + 1] === "c") {
        i += 2;
      } else {
        r += str[i];
        i++;
      }
    }

    return r;
  }
}
