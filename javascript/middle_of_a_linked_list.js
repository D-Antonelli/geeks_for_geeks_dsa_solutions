// https://www.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  /* Should return data of middle node. If linked list is empty, then  -1*/
  getMiddle(node) {
    let size = this.getSize(node);
    let curr = node;

    let middle = size % 2 == 0 ? size / 2 : Math.floor(size / 2);

    if (size == 1) {
      return node.data;
    }

    for (let i = 1; i <= middle; i++) {
      curr = curr.next;

      if (i == middle) {
        return curr.data;
      }
    }
  }

  getSize(node) {
    let curr = node;
    let size = 0;

    while (curr !== null) {
      size++;
      curr = curr.next;
    }

    return size;
  }
}
