const BinaryTree = require("./binary-tree.js");
const BinaryTreeNode = require("./binary-tree-node.js");

class BinarySearchTree extends BinaryTree {
  constructor() {
      super();
    }

  insert(value) {
      const newNode = new BinaryTreeNode(value);
      if(!this._root) {
          this._root = newNode;
        } else {
          let currentNode = this._root;
          while(true) {
              if(currentNode.value > value) {
                  if(currentNode.left !== null) {
                      currentNode = currentNode.left;
                    } else {
                      currentNode.left = newNode;
                      break;
                    }
                } else if(currentNode.value < value) {
                  if(currentNode.right !== null) {
                      currentNode = currentNode.right;
                    } else {
                      currentNode.right = newNode;
                      break;
                    }
                } else {
                  break;
                }
            }
        }
    }

  remove(value) {
      const deleteRecursively = (root, value) => {
          if(!root) {
              return null;
            } else if(value < root.value) {
              root.left = deleteRecursively(root.left, value);
            } else if(value > root.value) {
              root.right = deleteRecursively(root.right, value);
            } else {
              if(!root.left && !root.right) {
                  return null;
                } else if(!root.left) {
                  root = root.right;
                  return root;
                } else if(!root.right) {
                  root = root.left;
                  return root;
                } else {
                  const temp = findMin(root.right);
                  root.value = temp.value;
                  root.right = deleteRecursively(root.right, temp.value);
                  return root;
                }
            }

          return root;
        };

      function findMin(root) {
          while(root.left) {
              root = root.left;
            }

          return root;
        }
    }

  search(value) {
      let currentRoot = this._root;
      let found = false;

      while(currentRoot) {
          if(currentRoot.value > value) {
              currentRoot = currentRoot.left;
          } else if(currentRoot.value < value) {
              currentRoot = currentRoot.right;
		  } else {
            found = true;
            break;
          }
        }

      return found;
    }
}
