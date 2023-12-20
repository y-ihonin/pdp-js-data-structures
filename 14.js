class BloomFilter {
  constructor(size, numHashes) {
    this.size = size;
    this.numHashes = numHashes;
    this.bitArray = new Array(size).fill(false);
  }

  add(element) {
    const hashes = this.getHashes(element);

    hashes.forEach(hash => {
      console.log(hash)
      this.bitArray[hash] = true;
    });
  }

  contains(element) {
    const hashes = this.getHashes(element);

    for (let hash of hashes) {
      if (!this.bitArray[hash]) {
        return false;
      }
    }
    return true;
  }

  getHashes(element) {
    const hashes = [];
    for (let i = 0; i < this.numHashes; i++) {
      const hash = this.hash(element, i);
      hashes.push(hash);
    }
    return hashes;
  }

  hash(element, seed) {
    let hash = 0;
    for (let i = 0; i < element.length; i++) {
      hash = (hash + seed) * element.charCodeAt(i);
    }
    return hash % this.size;
  }
}

const bloomFilter = new BloomFilter(100, 3);

bloomFilter.add("apple");
bloomFilter.add("banana");
bloomFilter.add("orange");

console.log(bloomFilter.contains("apple"));
console.log(bloomFilter.contains("banana"));
console.log(bloomFilter.contains("orange"));
console.log(bloomFilter.contains("grape"));
