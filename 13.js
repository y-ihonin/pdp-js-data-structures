const ALPHABET_SIZE = 26;

class TrieNode {
  constructor() {
    this.isEndOfWord = false;
    this.children = new Array(ALPHABET_SIZE);

    for (let i = 0; i < ALPHABET_SIZE; i++) {
      this.children[i] = null;
    }
  }

  insert(key) {
    let level;
    let length = key.length;
    let index;

    let currentNode = this;

    for (level = 0; level < length; level++) {
      index = key[level].charCodeAt(0) - "a".charCodeAt(0);
      if (currentNode.children[index] == null) currentNode.children[index] = new TrieNode();

      currentNode = currentNode.children[index];
    }

    currentNode.isEndOfWord = true;
  }

  search(key) {
    let level;
    let length = key.length;
    let index;
    let currentNode = this;

    for (level = 0; level < length; level++) {
      index = key[level].charCodeAt(0) - "a".charCodeAt(0);

      if (currentNode.children[index] == null) return false;

      currentNode = currentNode.children[index];
    }

    return currentNode.isEndOfWord;
  }
}

const trie = new TrieNode();
trie.insert("the");
trie.insert("a");
trie.insert("there");

console.log(trie.search("the"))
console.log(trie.search("th"))
