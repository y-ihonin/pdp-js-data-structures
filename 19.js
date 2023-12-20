class SkipListNode {
  constructor(value, level) {
    this.value = value;
    this.next = new Array(level + 1);
  }
}

class SkipList {
  constructor() {
    this.head = new SkipListNode(-Infinity, 0);
    this.maxLevel = 0;
  }

  randomLevel() {
    let level = 0;
    while (Math.random() < 0.5 && level < this.maxLevel + 1) {
      level++;
    }
    return level;
  }

  insert(value) {
    const level = this.randomLevel();
    const newNode = new SkipListNode(value, level);

    if (level > this.maxLevel) {
      for (let i = this.maxLevel + 1; i <= level; i++) {
        this.head.next[i] = newNode;
      }
      this.maxLevel = level;
    }

    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (i <= level) {
        newNode.next[i] = current.next[i];
        current.next[i] = newNode;
      }
    }
  }

  search(value) {
    let current = this.head;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
    }
    if (current.next[0] && current.next[0].value === value) {
      return current.next[0];
    }
    return null;
  }

  delete(value) {
    let current = this.head;
    let deleted = false;
    for (let i = this.maxLevel; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      if (current.next[i] && current.next[i].value === value) {
        current.next[i] = current.next[i].next[i];
        deleted = true;
      }
    }
    return deleted;
  }
}

const list = new SkipList();
list.insert(1);
list.insert(2);
list.insert(3);

console.log(list.search(1));

list.delete(1);

console.log(list.search(1))
