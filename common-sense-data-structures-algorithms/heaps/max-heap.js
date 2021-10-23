class Heap {
  constructor() {
    this.data = [];
  }

  rootNode() {
    return this.data[0];
  }

  lastNode() {
    return this.data[this.data.length - 1];
  }

  leftChildIdx(idx) {
    return idx * 2 + 1;
  }

  rightChildIdx(idx) {
    return idx * 2 + 2;
  }

  parendIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  insert(value) {
    this.data.push(value);

    let newNodeIdx = this.data.length - 1;

    while (
      newNodeIdx > 0 &&
      this.data[newNodeIdx] > this.data[this.parentIdx(newNodeIdx)]
    ) {
      [this.data[this.parentIdx(newNodeIdx)], this.data[newNodeIdx]] = [
        this.data[newNodeIdx],
        this.data[this.parentIdx(newNodeIdx)],
      ];

      newNodeIdx = this.parentIdx(newNodeIdx);
    }
  }

  delete() {
    this.data[0] = this.data.pop();

    let trickleNodeIdx = 0;

    while (this.hasGreaterChild(trickleNodeIdx)) {
      const largerChildIdx = this.calculateLargerChildIdx(trickleNodeIdx);

      [this.data[trickleNodeIdx], this.data[largerChildIdx]] = [
        this.data[largerChildIdx],
        this.data[trickleNodeIdx],
      ];

      trickleNodeIdx = largerChildIdx;
    }
  }
}
