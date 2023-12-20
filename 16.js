class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(task, priority) {
    this.queue.push({ task, priority, date: new Date().getTime() });
    this.queue.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }

      return a.date - b.date;
    });
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift().task;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2.1", 1);
priorityQueue.enqueue("Task 2.2", 1);
priorityQueue.enqueue("Task 3", 3);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
