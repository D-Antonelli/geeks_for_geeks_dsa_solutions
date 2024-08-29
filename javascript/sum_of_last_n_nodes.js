// https://www.geeksforgeeks.org/problems/find-the-sum-of-last-n-nodes-of-the-linked-list/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  sumOfLastN_Nodes(head, n) {
    let curr = head;
    let size = 0;
    let sum = 0;

    while (curr !== null) {
      size++;
      curr = curr.next;
    }

    curr = head;

    for (let i = 1; i <= size - n; i++) {
      curr = curr.next;
    }

    while (curr !== null) {
      sum += curr.data;
      curr = curr.next;
    }

    return sum;
  }
}
