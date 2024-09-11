// https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1

class Solution {
  // Function to check if the linked list has a loop.
  detectLoop(head) {
    let map = new Map();
    let curr = head;

    while (curr !== null) {
      if (!map.has(curr)) {
        map.set(curr, true);
      } else {
        return map.get(curr);
      }
      curr = curr.next;
    }
  }
}
