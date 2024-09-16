// https://www.geeksforgeeks.org/problems/sorted-insert-for-circular-linked-list/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  sortedInsert(head, data) {
    let curr = head;
    let next = curr.next;

    while (true) {
      let node = new Node(data, null);
      let endOfList = curr.data > next.data;

      if ((curr.data <= data && next.data >= data) || endOfList) {
        node.next = next;
        curr.next = node;
        break;
      }

      curr = curr.next;
      next = curr.next;
    }

    return head;
  }
}
