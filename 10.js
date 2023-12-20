class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = 0;
  }

  hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  set(key, value) {
    const hash = this.hashKey(key);
    this.table[hash] = [key, value];
    this.size++;
  }

  get(key) {
    const hash = this.hashKey(key);
    return this.table[hash];
  }

  remove(key) {
    const hash = this.hashKey(key);

    if (this.table[hash] && this.table[hash].length) {
      this.table[hash] = undefined;
      this.size--;

      return true;
    } 
    
    return false;
  }
}

// Usage example
const myHashTable = new HashTable();
myHashTable.set("hash-table", "1");
myHashTable.set(2, 2);

console.log(myHashTable.get("hash-table"));
console.log(myHashTable.get(2));
console.log(myHashTable.size);

myHashTable.remove("hash-table");
console.log(myHashTable.get("hash-table"));
console.log(myHashTable.size);
