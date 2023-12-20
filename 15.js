class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);

      return value;
    }

    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}
const cache = new LRUCache(3);

cache.put("1", "value1");
cache.put("2", "value2");
cache.put("2", "value3");

console.log(cache.get("1"));
console.log(cache.get("3"));

cache.put("4", "value4");

console.log(cache.get("1"));
console.log(cache.get("2"));
console.log(cache.get("4"));
console.log(cache.get("3"));
