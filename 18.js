const RED = 'red';
const BLACK = 'black';

class Node {
  constructor(key, value, color, left, right, parent) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.left = left || null;
    this.right = right || null;
    this.parent = parent || null;
  }
}

class RedBlackTree {
  constructor() {
    this.tree = new Node(null, null, BLACK);
    this.root = this.tree;
  }

  insert(key, value) {
    const newNode = new Node(key, value, RED, this.tree, this.tree, this.tree);
    this._insert(newNode);
    this._insertFixup(newNode);
  }

  _insert(newNode) {
    let parent = this.tree;
    let current = this.root;

    while (current !== this.tree) {
      parent = current;
      if (newNode.key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;

    if (parent === this.tree) {
      this.root = newNode;
    } else if (newNode.key < parent.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }

  _insertFixup(node) {
    while (node.parent.color === RED) {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;

        if (uncle.color === RED) {
          // Case 1: Recolor
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // Case 2: Left Rotate
            node = node.parent;
            this._leftRotate(node);
          }

          // Case 3: Recolor and Right Rotate
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this._rightRotate(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;

        if (uncle.color === RED) {
          // Case 1: Recolor
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // Case 2: Right Rotate
            node = node.parent;
            this._rightRotate(node);
          }

          // Case 3: Recolor and Left Rotate
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this._leftRotate(node.parent.parent);
        }
      }
    }

    this.root.color = BLACK;
  }

  _leftRotate(node) {
    const rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== this.tree) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === this.tree) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  _rightRotate(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== this.tree) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === this.tree) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  search(key) {
    return this._search(this.root, key);
  }

  _search(node, key) {
    if (node === this.tree || key === node.key) {
      return node.value;
    }

    if (key < node.key) {
      return this._search(node.left, key);
    } else {
      return this._search(node.right, key);
    }
  }
}

// Example usage:
const redBlackTree = new RedBlackTree();
redBlackTree.insert(5, 'Five');
redBlackTree.insert(3, 'Three');
redBlackTree.insert(7, 'Seven');
redBlackTree.insert(2, 'Two');
redBlackTree.insert(4, 'Four');

console.log(redBlackTree.search(3));
