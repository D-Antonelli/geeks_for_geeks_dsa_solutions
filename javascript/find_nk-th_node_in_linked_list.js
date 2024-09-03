// https://www.geeksforgeeks.org/problems/find-nk-th-node-in-linked-list/1

class Solution {
  // Function to find the fractional node in the linked list.
  fractional_node(head, k) {
    let size = 0;
    let curr = head;

    while (curr !== null) {
      size++;
      curr = curr.next;
    }

    curr = head;
    let target = Math.ceil(size / k);

    while (curr !== null) {
      if (target == 1) {
        return curr.data;
      }

      curr = curr.next;
      target--;
    }
  }
}
