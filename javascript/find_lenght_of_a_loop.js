// https://www.geeksforgeeks.org/problems/find-length-of-loop/1?track=amazon-linkedlists&batchId=192

class Solution {
  // Function to find the length of a loop in the linked list.
  countNodesinLoop(head) {
    let curr = head;
    let map = new Map();
    let loops = 0;

    while (curr !== null) {
      if (!map.has(curr)) {
        map.set(curr, false); // non-looping nodes are set to value "false"
      } else {
        if (map.get(curr)) {
          break;
        } else {
          map.set(curr, true); // looping nodes are set to value "true"
        }
      }
      curr = curr.next;
    }

    map.forEach((value) => {
      if (value == true) {
        loops++;
      }
    });

    return loops;
  }
}
