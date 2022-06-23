function reverseList(head) {
  let newHead = null;
  if (!head || !head.next) return head;

  function reverseLinkedList(head) {
    if(head && head.next === null) {
        newHead = head;
        return head;
      }

    const current = reverseLinkedList(head.next);
    current.next = head;

    return head;
  }
  
  const newTail = reverseLinkedList(head);
  newTail.next = null;
  
  return newHead;
}