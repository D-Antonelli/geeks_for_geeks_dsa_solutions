// https://www.geeksforgeeks.org/problems/modular-node/1

class Solution {
  modularNode(head, k) {
    let size = 0;
    let curr = head;
    let res = -1;

    while (curr !== null) {
      size++;
      curr = curr.next;
    }

    let nth = size - (size % k);

    curr = head;
    let i = 0;

    while (curr !== null) {
      i++;

      if (i == nth) {
        res = curr.data;
      }

      curr = curr.next;
    }

    return res;
  }
}
