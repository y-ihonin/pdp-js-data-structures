class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(key, value) {
    this.root = new Node(key, value);
  }

  insert(key, value) {
    const insertInTree = (node, key, value) => {
      if (node === null) {
        return new Node(key, value);
      }

      switch (true) {
        case key < node.key:
          node.left = insertInTree(node.left, key, value);
          break;
        case key > node.key:
          node.right = insertInTree(node.right, key, value);
          break;
        default:
          node.value = value;
      }

      return node;
    }

    this.root = insertInTree(this.root, key, value);
  }

  search(key) {
    const searchInTree = (node, key) => {
      switch (true) {
        case node === null:
          return null;
        case key < node.key:
          return searchInTree(node.left, key);
        case key > node.key:
          return searchInTree(node.right, key);
        default:
          return node.value;
      }
    }

    return searchInTree(this.root, key);
  }
}

// Example usage:
const binaryTree = new BinarySearchTree(10, "Root");
binaryTree.insert(11, 'Root right');
binaryTree.insert(5, 'Root left');
binaryTree.insert(9, 'Left side in 11 node');



console.log(binaryTree.search(10));
console.log(binaryTree.search(11));
console.log(binaryTree.search(9));
