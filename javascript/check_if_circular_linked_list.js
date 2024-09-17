// https://www.geeksforgeeks.org/problems/circular-linked-list/1

/*
 Time complexity: O(n)
**/
class Solution {
  isCircular(head) {
    let curr = head;

    if (head == null) {
      // null is circular
      return true;
    }

    while (curr !== null) {
      if (curr.next == head) {
        return true;
      }

      curr = curr.next;
    }

    return false;
  }
}
