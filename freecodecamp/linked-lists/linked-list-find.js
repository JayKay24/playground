function linkedListFind(head) {
function linkedListFind(head, target) {
  if (head === null) return false;
  if (head.val === target) return true;
  
  return linkedListFind(head.next, target);
}