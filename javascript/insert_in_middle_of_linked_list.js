// https://www.geeksforgeeks.org/problems/insert-in-middle-of-linked-list/1?track=DSA-Foundation-Final-Linked-List&batchId=193

// two pointers technique
class Solution {
  insertInMiddle(head, x) {
    let ptr1 = head,
      ptr2 = head;

    if (head == null) {
      return new Node(x, null);
    }

    while (true) {
      if (ptr2.next == null || ptr2.next.next == null) {
        let node = new Node();
        node.data = x;
        node.next = ptr1.next;
        ptr1.next = node;
        break;
      }

      ptr1 = ptr1.next;
      ptr2 = ptr2.next.next;
    }

    return head;
  }
}
