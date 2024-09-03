// https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1?track=PC-W5-LL&batchId=154

class Solution {
  insertAtEnd(head, x) {
    // code here
    let curr = head;
    let iterate = true;

    if (head == null) {
      head = new Node(x, null);
      return head;
    }

    while (iterate) {
      if (curr.next == null) { // tail
        let tail = new Node();
        tail.data = x;
        tail.next = null;
        curr.next = tail;
        iterate = false;
      }

      curr = curr.next;
    }

    return head;
  }
}
