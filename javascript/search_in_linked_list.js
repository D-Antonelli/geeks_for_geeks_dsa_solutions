// https://www.geeksforgeeks.org/problems/search-in-linked-list-1664434326/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  /**
   * @param {number} n
   * @param {Node} head
   * @param {number} key
   * @returns {boolean}
   */
  searchKey(n, head, key) {
    let curr = head;

    while (curr !== null) {
      if (curr.data == key) {
        return 1;
      }

      curr = curr.next;
    }

    return 0;
  }
}
