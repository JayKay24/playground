class BinaryTree {
  constructor() {
      this._root = null;
    }

  traversePreOrder() {
    const traversePreOrderHelper = (node) => {
        if(!node) return;
        console.log(node.value);
        traversePreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
      };

    traversePreOrderHelper(this._root);
  }

  traverseInOrder() {
    const traverseInOrderHelper = (node) => {
        if(!node) return;
        traverseInOrderHelper(node.left);
        console.log(node.value);
        traverseInOrderHelper(node.right);
      }

    traverseInOrderHelper(this._root);
  }

  traversePostOrder() {
    const traversePostOrderHelper = (node) => {
        if(!node) return;
        traversePostOrderHelper(node.left);
        traversePostOrderHelper(node.right);
        console.log(node.value);
      };

    traversePostOrderHelper(this._root);
  }

  traverseLevelOrder() {
    const queue = [];
    if(!this._root) return;
    queue.push(this._root);

    while(queue.length > 0) {
      const temp = queue.shift();
      console.log(temp.value);

      if(temp.left) queue.push(temp.left);
      if(temp.right) queue.push(temp.right);
    }
  }
}

module.exports = BinaryTree;

