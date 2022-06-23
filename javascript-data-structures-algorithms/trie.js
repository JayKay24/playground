class TrieNode {
  constructor() {
      this.children = {};
      this.endOfWord = false;
    }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
    }

  insert(word) {
      let current = this.root;
      for(let i = 0; i < word.length; i++) {
          let ch = word[i];
          let node = current.children[ch];
          if (!node) {
              node = new TrieNode();
              current.children[ch] = node;
            }
          current = node;
        }

      current.endOfWord = true;
    }

  search(word) {
      let current = this.root;
      for(let i = 0; i < word.length; i++) {
          let ch = word[i];
          let node = current.children[ch];
          if (!node) return false;

          current = node;
        }

      return current.endOfWord;
    }

  delete(word) {
      this.deleteRecursively(this.root, word, 0);
    }

  deleteRecursively(current, word, index) {
      if(index === word.length) {
          // when end of word is reached only delete if
          // current.endOfWord === true
          if(!current.endOfWord) return false;

          current.endOfWord = false;
          // if current has no other mapping then return
          // true
          return Object.keys(current.children).length === 0;
        }

      let ch = word[index],
        node = current.children[ch];

      if(!node) return false;

      let shouldDeleteCurrentNode = this.deleteRecursively(node, word, index + 1);

      // if true is returned, then delete the mapping of character
      // and trienode reference from map.
      if(shouldDeleteCurrentNode) {
          delete current.children[ch];
          // return true if there are no mappings left in the map
          return Object.keys(current.children).length === 0;
        }

      return false;
    }
}
