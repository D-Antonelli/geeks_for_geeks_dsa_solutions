// https://www.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1

class Solution {
  // Function to check whether the list is palindrome.
  isPalindrome(head) {
    let rhead = this.reverseList(head);

    let pt1 = head,
      pt2 = rhead;

    while (pt1 !== null && pt2 !== null) {
      if (pt1.data !== pt2.data) {
        return false;
      }

      pt1 = pt1.next;
      pt2 = pt2.next;
    }

    return true;
  }

  reverseList(head) {
    let tail = null;
    let nhead = null; // new head

    let curr = head;

    while (curr !== null) {
      let n = new Node(curr.data, null);

      if (tail == null) {
        tail = n;
        nhead = tail;
      } else {
        n.next = nhead;
        nhead = n;
      }

      curr = curr.next;
    }

    return nhead;
  }
}
