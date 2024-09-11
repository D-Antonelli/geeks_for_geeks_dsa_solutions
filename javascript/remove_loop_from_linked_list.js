// https://www.geeksforgeeks.org/problems/remove-loop-in-linked-list/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  // Function to remove a loop in the linked list.
  removeLoop(head) {
    let map = new Map();
    let curr = head;
    let prev = null;

    while (curr !== null) {
      if (!map.has(curr)) {
        map.set(curr, true);
      } else {
        prev.next = null;
        return map.get(curr);
      }
      prev = curr;
      curr = curr.next;
    }
  }
}
