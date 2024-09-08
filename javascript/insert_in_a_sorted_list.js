// https://www.geeksforgeeks.org/problems/insert-in-a-sorted-list/1

class Solution {
  sortedInsert(node, x) {
    let curr = node;
    let newNode = new Node(x, null);

    while (curr !== null) {
      if (node.data >= x) {
        // head
        newNode.next = node;
        node = newNode;
        break;
      } else if (curr.data <= x && curr.next == null) {
        // tail
        curr.next = newNode;
        break;
      } else if (curr.data <= x && curr.next.data >= x) {
        newNode.next = curr.next;
        curr.next = newNode;
        break;
      }

      curr = curr.next;
    }

    return node;
  }
}
