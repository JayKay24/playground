const Heap = require("./heap.js");

class MaxHeap extends Heap {
  add(item) {
	this.items.push(item);

	this.bubbleUp();
  }

  poll() {
	const item = this.items[0];

	this.items[0] = this.items[this.items.length - 1];
	this.items.pop();

	this.bubbleDown();

	return item;
  }

  bubbleDown() {
	let idx = 0;

	while (this.leftChild(idx) &&
	  (this.leftChild(idx) > this.items[idx] ||
		this.rightChild(idx) > this.items[idx])) {
	  let biggerIdx = this.leftChildIdx(idx);

	  if (this.rightChild(idx) &&
		this.rightChild(idx) > this.items[biggerIdx]) {
		biggerIdx = this.rightChildIdx(idx);
	  }

	  this.swap(biggerIdx, idx);

	  idx = biggerIdx;
	}
  }

  bubbleUp() {
	let idx = this.items.length - 1;

	while (this.parent(idx) &&
	  this.parent(idx) < this.items[idx]) {
	  this.swap(idx, this.parentIdx(idx));

	  idx = this.parentIdx(idx);
	}
  }
}

module.exports = MaxHeap;

