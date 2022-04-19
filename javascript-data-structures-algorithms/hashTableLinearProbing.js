class HashTableLinearProbing {
  constructor(size) {
      this.size = size;
      this.keys = this.initArray(size);
      this.values = this.initArray(size);
      this.limit = 0;
    }

  put(key, value) {
    if(this.limit >= this.size) throw 'hash table is full';

    let hashedIdx = this.hash(key);

    // Linear probing
    while(this.keys[hashedIdx] != null) {
      hashedIdx++;
      hashedIdx %= this.size;
    }

    this.keys[hashedIdx] = key;
    this.values[hashedIdx] = value;
    this.limit++;
  }

  get(key) {
    let hashedIdx = this.hash(key);

    while(this.keys[hashedIdx] != key) {
      hashedIdx++;

      hashedIdx %= this.size;
    }

    return this.values[hashedIdx];
  }

  hash(key) {
    // check if int
    if(!Number.isInteger(key)) throw 'must be int';
    
    return key % this.size;
  }
  
  initArray(size) {
    return new Array(this.size).fill(null);
  }
}