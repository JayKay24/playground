function isMirrorTrees(tree1, tree2) {
  // base case, both empty
  if(!tree1 && !tree2) return true;

  if(!tree1 || !tree2) return false;

  let checkLeftWithRight = isMirrorTrees(tree1.left, tree2.right);
  let checkRightWithLeft = isMirrorTrees(tree1.right, tree2.left);

  return tree1.value === tree2.value && checkLeftWithRight && checkRightWithLeft;
}
