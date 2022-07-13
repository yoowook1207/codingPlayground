var preorder = function(root) {
    if (!root){
        return [];
    }
    
    let order = [];
    let stack = [];
    stack.push(root);
    
    while(stack.length > 0) {
        let node = stack.pop();
        order.push(node.val);
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);    
        }
        
    }
    
    return order;
};