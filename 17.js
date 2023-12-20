class FibonacciHeapNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.degree = 0;
    this.child = null;
    this.parent = null;
    this.marked = false;
    this.next = this;
    this.prev = this;
  }
}

class FibonacciHeap {
  constructor() {
    this.minNode = null;
    this.nodes = 0;
  }

  insert(key, value) {
    const newNode = new FibonacciHeapNode(key, value);
    if (this.minNode === null) {
      this.minNode = newNode;
    } else {
      this._mergeTree(this.minNode, newNode);
      if (newNode.key < this.minNode.key) {
        this.minNode = newNode;
      }
    }
    this.nodes++;
  }

  _mergeTree(treeRoot1, treeRoot2) {
    treeRoot1.next.prev = treeRoot2;
    treeRoot2.next.prev = treeRoot1;

    const temp = treeRoot1.next;
    treeRoot1.next = treeRoot2.next;
    treeRoot2.next = temp;

    treeRoot2.parent = treeRoot1;

    treeRoot1.degree++;

    treeRoot2.marked = false;
  }
}

const fibonacciHeap = new FibonacciHeap();
fibonacciHeap.insert(5, 'Five');
fibonacciHeap.insert(3, 'Three');
fibonacciHeap.insert(7, 'Seven');
fibonacciHeap.insert(2, 'Two');
fibonacciHeap.insert(4, 'Four');

console.log(fibonacciHeap); 
