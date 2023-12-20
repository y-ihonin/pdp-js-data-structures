class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  append(data) {
    const newNode = new Node(data);
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

const linkedList = new LinkedList("A");
linkedList.append("B");
linkedList.append("C");
console.log(JSON.stringify(linkedList));
