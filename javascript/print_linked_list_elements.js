// https://www.geeksforgeeks.org/problems/print-linked-list-elements/1

class Solution {
  // Function to display the elements of a linked list
  display(head) {
    const arr = [];
    let curr = head;

    while (curr !== null) {
      arr.push(curr.data);

      curr = curr.next;
    }

    console.log(arr.join(" "));
  }
}
