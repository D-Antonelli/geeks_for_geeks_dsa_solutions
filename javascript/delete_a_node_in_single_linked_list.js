// https://www.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  deleteNode(head, x) {
    let curr = head;
    let prev = head;
    let i = 0;

    while (true) {
      if (x == 1) {
        head = head.next;
        break;
      }

      i += 1;

      if (i == x) {
        prev.next = curr.next;
        break;
      }

      prev = curr;
      curr = curr.next;
    }

    return head;
  }
}
