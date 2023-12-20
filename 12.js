class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    const min = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex;

    while (currentIndex > 0) {
      parentIndex = currentIndex - 1;

      if (this.heap[currentIndex] >= this.heap[parentIndex]) {
        break;
      }

      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];

      currentIndex = parentIndex;
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    let leftChildIndex, rightChildIndex, smallerChildIndex;

    while (currentIndex < this.heap.length) {
      leftChildIndex = 2 * currentIndex + 1;
      rightChildIndex = 2 * currentIndex + 2;
      smallerChildIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (smallerChildIndex === currentIndex) {
        break;
      }

      [this.heap[currentIndex], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[currentIndex],
      ];

      currentIndex = smallerChildIndex;
    }
  }
}

const minHeap = new MinHeap();

minHeap.insert(5);
minHeap.insert(10);
minHeap.insert(3);
minHeap.insert(8);

console.log(minHeap.extractMin());
console.log(minHeap.extractMax());
