class Heap {
  constructor() {
	this.items = [];
  }

  swap(idx1, idx2) {
	[this.items[idx2], this.items[idx1]] = [this.items[idx1], this.items[idx2]];
  }

  parentIdx(idx) {
	return Math.floor((idx - 1) / 2);
  }

  leftChildIdx(idx) {
	return idx * 2 + 1;
  }

  rightChildIdx(idx) {
	return idx * 2 + 2;
  }

  parent(idx) {
	return this.items[this.parentIdx(idx)];
  }

  leftChild(idx) {
	return this.items[this.leftChildIdx(idx)];
  }

  rightChild(idx) {
	return this.items[this.rightChildIdx(idx)];
  }

  peek() {
	return this.items[0];
  }

  size() {
	return this.items.length;
  }
}

module.exports = Heap;

