// https://www.geeksforgeeks.org/problems/find-nk-th-node-in-linked-list/1

class Solution {
  // Function to find the fractional node in the linked list.
  fractional_node(head, k) {
    let n = 0;
    let curr = head;

    while (curr !== null) {
      n++;

      curr = curr.next;
    }

    let ele = Math.ceil(n / k);
    let i = 0;
    curr = head;

    while (curr !== null) {
      i++;
      if (i == ele) {
        return curr.data;
      }

      curr = curr.next;
    }
  }
}
