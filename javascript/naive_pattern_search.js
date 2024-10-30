// time complexity: O(n*m)
class Solution {
  searchPattern(str, pat) {
    let l = 0; // left
    let r = l; // right
    let j = 0; // pat iterate

    while (l < str.length) {
      if (str[r] === pat[j] && j === pat.length - 1) {
        return true;
      } else if (str[r] === pat[j]) {
        r++;
        j++;
      } else {
        l++;
        r = l;
        j = 0;
      }
    }

    return false;
  }
}
