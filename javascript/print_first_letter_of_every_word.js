// https://www.geeksforgeeks.org/problems/print-first-letter-of-every-word-in-the-string3632/1?company%5B%5D=Amazon&difficulty%5B%5D=-1&page=1&query=company%5B%5DAmazoncompany%5B%5DMicrosoftcompany%5B%5DSamsungdifficulty%5B%5D-1difficulty%5B%5D0page1

// words have a single space between them.
class Solution {
  firstAlphabet(str) {
    let str1 = str.trim();
    let firstLetters = str1[0]; // init with first letter

    for (let i = 1; i < str1.length - 1; i++) {
      if (str1[i].trim() === "") {
        firstLetters += str1[i + 1];
      }
    }

    return firstLetters;
  }
}