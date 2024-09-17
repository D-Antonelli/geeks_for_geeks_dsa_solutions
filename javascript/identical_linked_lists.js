// https://www.geeksforgeeks.org/problems/identical-linked-lists/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

/*
The time complexity is O(n) because the while loop iterates through both linked lists simultaneously until one of them reaches the end, where n is the number of nodes in the shorter linked list.
*/

class Solution {
  // Function to check whether two linked lists are identical or not.
  areIdentical(head1, head2) {
    let curr1 = head1;
    let curr2 = head2;

    while (curr1 !== null && curr2 !== null) {
      if (curr1.data !== curr2.data) {
        return false;
      }

      curr1 = curr1.next;
      curr2 = curr2.next;
    }

    return true;
  }
}
