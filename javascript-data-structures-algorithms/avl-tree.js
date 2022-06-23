class AVLTree {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.depth = 1;
  }

  setDepthBasedOnChildren(){
	if(this.node === null) {
	  this.depth = 0;
	} else {
	  this.depth = 1;
	}

	if(this.left !== null) {
	  this.depth = this.left.depth + 1;
	}

	if(this.right !== null && this.depth <= this.right.depth) {
	  this.depth = this.right.depth + 1;
	}
  }
}
