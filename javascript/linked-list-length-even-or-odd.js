// https://www.geeksforgeeks.org/problems/linked-list-length-even-or-odd/1

class Solution {
  // Function should return 0 if length is even else return 1
  isLengthEven(head) {
    let size = 0;
    let curr = head;

    while (curr !== null) {
      size++;
      curr = curr.next;
    }

    return size % 2 == 0;
  }
}
