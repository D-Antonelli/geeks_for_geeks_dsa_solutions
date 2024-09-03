// https://www.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  // Function to merge two sorted linked list.
  sortedMerge(head1, head2) {
    let l = null;
    let ptr1 = head1,
      ptr2 = head2,
      ptr3 = l,
      iterate = true;

    while (iterate) {
      if (ptr1 == null && ptr2 == null) {
        iterate = false;
        break;
      }
      
      let node = null;

      if (ptr1 == null) {
        node = new Node(ptr2.data, null);
        ptr2 = ptr2.next;
      } else if (ptr2 == null) {
        node = new Node(ptr1.data, null);
        ptr1 = ptr1.next;
      } else if (ptr1.data < ptr2.data) {
        node = new Node(ptr1.data, null);
        ptr1 = ptr1.next;
      } else if (ptr2.data < ptr1.data) {
        node = new Node(ptr2.data, null);
        ptr2 = ptr2.next;
      } else if (ptr1.data == ptr2.data) {
        node = new Node(ptr1.data, null);
        node.next = new Node(ptr2.data, null);
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      }

      if (l == null) {
        l = node;
        if (l.next) {
          ptr3 = l.next;
        } else {
          ptr3 = l;
        }
      } else {
        ptr3.next = node;

        if (ptr3.next.next !== null) {
          ptr3 = ptr3.next.next;
        } else {
          ptr3 = ptr3.next;
        }
      }
    }

    return l;
  }
}
