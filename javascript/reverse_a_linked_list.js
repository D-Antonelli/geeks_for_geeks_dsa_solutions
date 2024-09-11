// https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  // Function to reverse a linked list.
  reverseList(head) {
    let tail = null;
    let nhead = null; // new head

    let curr = head;

    while (curr !== null) {
      let n = new Node(curr.data, null);

      if (tail == null) {
        tail = n;
        nhead = tail;
      } else {
        n.next = nhead;
        nhead = n;
      }

      curr = curr.next;
    }

    return nhead;
  }
}
