
// time complexity depends on browser - but it can be assumed that every algorithm has O(log N)
class Solution {
  sortInPlace(arr) {
    arr.sort((a, b) => a - b)
    return arr;
  }

  nonMutatingSort(arr) {
    return arr.toSorted((a, b) => a - b);
  }
} 