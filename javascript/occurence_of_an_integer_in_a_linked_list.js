// https://www.geeksforgeeks.org/problems/occurence-of-an-integer-in-a-linked-list/1

class Solution {
  count(head, key) {
    let curr = head,
      c = 0;

    while (curr !== null) {
      if (curr.data == key) {
        c++;
      }

      curr = curr.next;
    }

    return c;
  }
}
