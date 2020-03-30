/* eslint-disable prefer-const */
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      let node = this.root;
      while (true) {
        if (data < node.data) {
          if (!node.left) {
            node.left = newNode;
            return this;
          }
          node = node.left;
        } else {
          if (!node.right) {
            node.right = newNode;
            return this;
          }
          node = node.right;
        }
      }
    }
  }

  lockup(data) {
    if (!this.root) {
      return false;
    }
    let node = this.root;
    while (node) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else if (node.data === data) return node;
    }
    return false;
  }
}

const bst = new Bst();
bst.insert(3);
bst.insert(2);
bst.insert(1);
bst.insert(99);
console.log(bst.lockup(2));
