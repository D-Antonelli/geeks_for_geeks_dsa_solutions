// https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1?page=1&category%5B%5D=Linked%2520List&curated%5B%5D=1&sortBy=submissions

// improve time
class Solution {
  getKthFromLast(head, k) {
    let i = head;
    let j = i;

    if (i.next == null) {
      if (k == 1) {
        return i.data;
      } else {
        return -1;
      }
    }

    while (j.next !== null) {
      let r = k;
      j = i; // 2nd pointer

      while (r > 0 && j.next !== null) { // j goes to k times next
        j = j.next;
        r--;
      }

      if (r > 1) { // kth is bigger than list size
        return -1;
      }

      if (r == 1 && j.next == null) { // kth is equal to list size
        continue;
      }

      i = i.next;
    }

    return i.data || -1;
  }
}
