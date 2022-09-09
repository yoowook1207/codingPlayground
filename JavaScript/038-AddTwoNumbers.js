// 2.Add Two Numbers

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0);
    let head = List;
    let sum =0;
    let carry =0;

    while (l1 !== null || l2 !== null || sum>0) {
        
        if (l1 !==null) {
            sum = sum + l1.val;
            l1 = l1.next
        }

        if (l2 !==null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if (sum>=10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry =0;
    }

    return List.next
};
