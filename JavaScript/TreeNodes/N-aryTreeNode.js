function Node(data) {
    this.data = data;
    this.children = [];
}

class Tree {
    constructor() {
        this.root = null;
    }
    add(data, parentNode) {
        const node = new Node(data);

        const parent = parentNode ? this.findBFS(parentNode) : null;
    
        if (parent) {
            parent.children.push(node)
            } else {
                if (!this.root) {
                    this.root = node;
                } else {
                    return "add root first"
                }
            }
    }

    findBFS(data) {
        const queue = [this.root];
        let _node = null;

        this.traverseBFS((node) => {
            if(node.data == data)
                _node = node
        })

        return _node;
    }

    traverseBFS(cb) {
        const queue = [this.root];

        if(cb) {
            while(queue.length) {
                const node = queue.shift();

                cb(node)

                for(const child of node.children) {
                    queue.push(child)
                }
            }
        }
    }

    traverseDFS(cb, method) {
        const current = this.root;
        if(method) {
          this[`_${method}`](current, cb);
        } else {
          this._preOrder(current, cb);
        }
    }

    sumChildren(target) {

        let targetNode = this.findBFS(target)

        if (targetNode ==null) {
            return 0
        }

        let total =0

        for (let i=0; i<targetNode.children.length; i++) {
            let childrenData= targetNode.children[i].data
            total += childrenData + this.sumChildren(childrenData)
        }
        
        return total
    }

    isEvenSumOfSubtrees() {
        let tempArray=[]

        for (let i=1; i<=8; i++) {
            let sum = this.sumChildren(i)

            if(sum%2==0 && sum !==0) {
                tempArray.push(i)
                console.log("---")
                console.log(i)
                console.log(sum)
            }
        }

        return tempArray
    }

    _preOrder(target, cb) {
        if(target) {
            if(cb) {
                cb(target)
            }
            for(let i=0; i<target.children.length; i++) {
                this._preOrder(target.children[i], cb);
            }
        }
    }

    _postOrder(node, cb) {
        if(node) {
          for(let i = 0; i < node.children.length; i++) {
            this._postOrder(node.children[i], cb);
          }
          if(cb) {
            cb(node);
          }
        }
      }
}


(function test() {
    let tree = new Tree();

    tree.add(1)
    tree.add(2, 1)
    tree.add(3, 1)
    tree.add(4, 2)
    tree.add(5, 2)
    tree.add(6, 3)
    tree.add(8, 3)

    tree.traverseBFS((node) => {console.log("Current node: ", node)})

    console.log("Its sum of children is: " + tree.sumChildren(3))
    console.log('--- DFS preOrder');

    tree.traverseDFS(node => { console.log(node.data); }, 'preOrder'); 

    console.log(tree.isEvenSumOfSubtrees())
    

})()