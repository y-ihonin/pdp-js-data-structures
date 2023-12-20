class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stackEx = new Stack();

stackEx.push(1);
stackEx.push(2);
console.log(stackEx);

stackEx.pop();
console.log(stackEx);

console.log(`Is stack empty - ${stackEx.isEmpty()}`);
stackEx.pop();
console.log(`Is stack empty - ${stackEx.isEmpty()}`);

