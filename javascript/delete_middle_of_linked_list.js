// https://www.geeksforgeeks.org/problems/delete-middle-of-linked-list/1?track=amazon-linkedlists&batchId=192

class Solution {
  deleteMid(node) {
    let ptr1 = node;
    let ptr2 = node;
    let prev = node;

    if (ptr1.next == null) {
      return null;
    }

    while (true) {
      if (ptr2.next !== null && ptr2.next.next !== null) {
        ptr2 = ptr2.next.next;
      } else if (ptr2.next !== null && ptr2.next.next == null) {
        ptr2 = ptr2.next;
      } else if (ptr2.next == null) {
        prev.next = ptr1.next;
        break;
      }

      prev = ptr1;
      ptr1 = ptr1.next;
    }

    return node;
  }
}
