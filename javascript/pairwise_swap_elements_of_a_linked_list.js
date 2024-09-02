// https://www.geeksforgeeks.org/problems/pairwise-swap-elements-of-a-linked-list-by-swapping-data/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  pairWiseSwap(node) {
    // your code here
    let head = null;
    let ptr = null;

    let curr = node;

    let size = 0;

    while (curr !== null) {
      size++;
      curr = curr.next;
    }

    if (size == 1) {
      return node;
    }

    curr = node;

    while (curr !== null && curr.next !== null) {
      let next = new Node(curr.data, null);
      let prev = new Node(curr.next.data, null);
      let tail = null;

      // add the last element if running out of pairs
      if (size % 2 !== 0 && curr.next.next.next == null) {
        tail = new Node(curr.next.next.data, null);
      }

      if (head == null) {
        head = prev;
        head.next = next;
      } else {
        ptr = head;

        while (ptr.next !== null) {
          ptr = ptr.next;
        }

        ptr.next = prev;
        ptr.next.next = next;

        if (tail !== null) {
          ptr.next.next.next = tail;
        }
      }

      curr = curr.next.next;
    }

    return head;
  }
}
