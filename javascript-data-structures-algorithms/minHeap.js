const Heap = require("./heap.js");

class MinHeap extends Heap {
  bubbleDown() {
	let idx = 0;

	while (this.leftChild(idx) && this.leftChild(idx) < this.items[idx] ||
	  this.rightChild(idx) < this.items[idx]) {
	  let smallerIdx = this.leftChildIdx(idx);

	  if (this.rightChild(idx) && this.rightChild(idx) < this.items[smallerIdx]) {
		// if right is smaller, right swaps
		smallerIdx = this.rightChildIdx(idx);
	  }

	  this.swap(smallerIdx, idx);

	  idx = smallerIdx;
	}
  }

  bubbleUp() {
	let idx = this.items.length - 1;

	while (this.parent(idx) && this.parent(idx) > this.items[idx]) {
	  this.swap(this.parentIdx(idx), idx);

	  idx = this.parentIdx(idx);
	}
  }

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
}
