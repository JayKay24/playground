function sumList(head, sum = 0) {
  if(head === null) return sum;
  return sumList(head.next, sum + head.val);
}