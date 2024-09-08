// https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1

class Solution {
  // Function to count nodes of a linked list.
  getCount(head) {
    let count = 0,
      curr = head;

    while (curr !== null) {
      count++;
      curr = curr.next;
    }

    return count;
  }
}
