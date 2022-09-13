// 21. Merge Two Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


 var mergeTwoLists = function(list1, list2) {
    
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;
    
    while (list1 && list2) {
        if(list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next
        } else {
            currentNode.next = list2;
            list2 = list2.next
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;
    
    return tempNode.next;
};

mergeTwoLists([1,2,4], [1,3,5,6])