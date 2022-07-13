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

function isHeap(root) {
    if (root.left == null && root.right == null)
    return true;

    if (root.right == null) {
        return root.data <= root.left.data
    } else {
        if(root.data <= root.left.data && root.data <= root.right.data)
        return isHeap(root.left) && isHeap(root.right)
        
        else
        return false
    }    
}

function isHeapFinal(root) {
    if (root==null)
    return true;

    let node_count = howManyNodes(root);

    if(isComplete(root, 0, node_count)==true && isHeap(root)==true) {
        return true }

    return false
}