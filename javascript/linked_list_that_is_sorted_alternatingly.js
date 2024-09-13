// https://www.geeksforgeeks.org/problems/linked-list-that-is-sorted-alternatingly/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  sort(head) {
    let curr = head;
    let nhead = null;
    let ptr = null;
    let ptr2 = null;

    // add ascending
    while (curr !== null) {
      let node = new Node(curr.data, null);
      if (nhead == null) {
        nhead = node;
        ptr = nhead;
      } else {
        ptr.next = node;
        ptr = ptr.next;
      }

      if (curr.next !== null && curr.next.next !== null) {
        curr = curr.next.next;
      } else {
        break;
      }
    }

    curr = head.next;

    // add descending
    while (curr !== null) {
      let node = new Node(curr.data, null);
      if (ptr2 == null) {
        ptr.next = node;
        ptr2 = ptr.next;
      } else {
        node.next = ptr2; // append numbers to the last ascending node
        ptr.next = node;
        ptr2 = node;
      }

      if (curr.next !== null && curr.next.next !== null) {
        curr = curr.next.next;
      } else {
        break;
      }
    }

    return nhead;
  }
}
