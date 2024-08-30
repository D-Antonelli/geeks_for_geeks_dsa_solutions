// https://www.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  // Function to remove duplicates from unsorted linked list.
  removeDuplicates(head) {
    let map = new Map();

    let curr = head;

    while (curr !== null) {
      // add unique elements and remove once get
      map.set(curr.data, true);
      curr = curr.next;
    }

    curr = head;

    while (curr !== null && curr.next !== null) {
      if (curr == head && map.get(curr.data)) {
        map.delete(curr.data);
      }

      // tail
      else if (curr.next.next == null && !map.get(curr.next.data)) {
        curr.next = null;
      } else if (!map.get(curr.next.data)) {
        curr.next = curr.next.next;
      } else if (map.get(curr.next.data)) {
        map.delete(curr.next.data);
        curr = curr.next;
      }
    }

    return head;
  }
}
