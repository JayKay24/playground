function printKthLevels(root, k) {
  let arrKth = [],
    queue = [];

  if(!root) return;
  // BFS for tree
  queue.push([root, 0]);

  while(queue.length) {
      let tuple = queue.shift();
      let [temp, height] = tuple;

      if(height === k) arrKth.push(temp.value);
      if(temp.left) queue.push([temp.left, height + 1]);
      if(temp.right) queue.push([temp.right, height + 1]);
    }

  return arrKth;
}
