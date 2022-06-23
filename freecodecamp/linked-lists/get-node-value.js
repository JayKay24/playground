function getNodeValue(head, idx, counter = 0) {
  if (head === null) return null;
  if (idx < counter) return null;
  if (idx === counter) return head.val;
  
  return getNodeValue(head.next, idx, counter + 1);
}