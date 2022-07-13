class TreeNode
{
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function newNode(data) {
    let Node= new TreeNode(data);
    return (Node);
}

function addBT(root) {
    if (root == null) {
        return 0;
    }
    return (root.data + addBT(root.left) + addBT(root.right))
}

function howManyNodes(root) {
    if (root==null)
    return 0

    return (1+ howManyNodes(root.left) + howManyNodes(root.right))
}

function isComplete(root, index, number_nodes) {
    if(root==null)
    return true;

    if(index>= number_nodes)
    return false;

    return isComplete(root.left, 2*index +1, number_nodes) && isComplete(root.right, 2*index+2, number_nodes)
}

function isMinHeap(root) {
    if (root.left == null && root.right == null)
    return true;

    if (root.right == null) {
        return root.data <= root.left.data
    } else {
        if(root.data <= root.left.data && root.data <= root.right.data)
        return isMinHeap(root.left) && isMinHeap(root.right)
        
        else
        return false
    }    
}

function isHeap(root) {
    if (root==null)
    return true;

    let node_count = howManyNodes(root);

    if(isComplete(root, 0, node_count)==true && isMinHeap(root)==true) {
        return true }

    return false
}

function returnEven(node) {
    if (node == null)
    return;

    returnEven(node.left)
    returnEven(node.right)

    if((addBT(node)-node.data)%2==0 && (addBT(node)-node.data) !=0) {
        console.log(node.data + " has even sum of all subtrees")
    }

}

function findAllNodePre(node) {
    if (node == null)
        return;


    console.log(node.data)
    findAllNodePre(node.left)
    findAllNodePre(node.right)
}

let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
root.right.left = newNode(6);
root.right.right = newNode(6);
root.left.left.left = newNode(8);
root.left.left.right = newNode(10);

console.log(addBT(root))
console.log(howManyNodes(root))
console.log(isHeap(root))
returnEven(root)
// findAllNodePre(root)
