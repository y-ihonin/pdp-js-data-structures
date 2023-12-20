class Node {
  constructor(value, id, parentId) {
    this.value = value;
    this.id = id;
    this.parentId = parentId;
    this.children = [];
  }
}

class Tree {
  constructor(value, id) {
    this.root = new Node(value, id, null);
  }

  createArrayFromTree() {
    const array = [];

    const traverse = (node) => {
      array.push(node);
      node.children.forEach((child) => {
        traverse(child);
      });
    }

    traverse(this.root);

    return array;
  }

  insert(value, id, parentId) {
    const newNode = new Node(value, id, parentId);

    switch (true) {
      case this.root === null:
        this.root = newNode;
        break;
      case this.root !== null && !parentId:
        this.insertNode(newNode, this.root.id);
        break;
      default:
        this.insertNode(newNode, parentId);
    }
  }

  insertNode(newNode, parentId) {
    const arrayTree = this.createArrayFromTree();

    arrayTree.forEach((node) => {
      if (node.id === parentId) {
        if (node.children === null) {
          node.children = [];
        }
        node.children.push(newNode);
        return;
      }
    })
  }
}

// Usage:
const tree = new Tree("C", 1);
tree.insert("document", 2, 1);
tree.insert("app", 3, 1);
tree.insert("treeApp", 4, 3);
console.log(JSON.stringify(tree));
