class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue(element) {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.items.shift(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queueEx = new Queue();

queueEx.enqueue(1);
queueEx.enqueue(2);
console.log(queueEx);

queueEx.dequeue();
console.log(queueEx);

console.log(`Is queue empty - ${queueEx.isEmpty()}`);
queueEx.dequeue();
console.log(`Is queue empty - ${queueEx.isEmpty()}`);

