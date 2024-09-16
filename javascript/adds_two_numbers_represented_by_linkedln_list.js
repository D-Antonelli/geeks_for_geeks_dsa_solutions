// https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

class Solution {
  // Function to add two numbers represented by linked list.
  addTwoLists(num1, num2) {
    let curr1 = num1;
    let curr2 = num2;

    let strNum1 = "";
    let strNum2 = "";

    let head = null;
    let ptr = null;

    while (curr1 !== null) {
      strNum1 += curr1.data;
      curr1 = curr1.next;
    }

    while (curr2 !== null) {
      strNum2 += curr2.data;
      curr2 = curr2.next;
    }

    let total = String(Number(strNum1) + Number(strNum2));

    for (let i = 0; i < total.length; i++) {
      let node = new Node(total[i], null);
      if (head == null) {
        head = node;
        ptr = head;
      } else {
        ptr.next = node;
        ptr = ptr.next;
      }
    }

    return head;
  }
}
