/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const leftStack = [];
    const leftOutPut = [];
    const rightStack = [];
    const rightOutPut = [];

    let left = root.left;
    let right = root.right;

    while (left !== null || leftStack.length !==0 ) {
        if (left !== null) {
            leftStack.push(left);
            left = left.left;
          } else {
            left = leftStack.pop();
            leftOutPut.push(left.val);
            left = left.right;
          }
    }

    while (right !== null || rightStack.length !==0 ) {
        if (right !== null) {
            rightStack.push(right);
            right = right.right;
          } else {
            right = rightStack.pop();
            rightOutPut.push(right.val);
            right = right.left;
          }
    }

    console.log(leftOutPut)
    console.log(rightOutPut)

    if(leftOutPut == rightOutPut) {
        return true
    } else return false
};