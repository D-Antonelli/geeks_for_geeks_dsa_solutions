// remove first element!
class Solution {
  // Function to remove duplicates from unsorted linked list.
  removeDuplicates(head) {
    let map = new Map();

    let curr = head;

    // store elements in map
    while (curr !== null) {
      if (!map.has(curr.data)) {
        map.set(curr.data, 1);
      } else {
        let count = map.get(curr.data);
        count++;
        map.set(curr.data, count);
      }

      curr = curr.next;
    }

    curr = head;

    while (curr !== null && curr.next !== null) {
      if (curr == head && map.get(curr.data) && map.get(curr.data) > 1) {
        let count = map.get(curr.data);
        count--;
        map.set(curr.data, count);
        head = head.next;
        curr = head;
      }

      if (map.get(curr.next.data) && map.get(curr.next.data) > 1) {
        let count = map.get(curr.next.data);
        count--;
        map.set(curr.next.data, count);
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }

    return head;
  }
}
