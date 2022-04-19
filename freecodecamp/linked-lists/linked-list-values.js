const linkedListValues = (head) => {
function linkedListValues(head, values = []) {
  if(!head) return values;
  values.push(head.val);
  
  return linkedListValues(head.next, values);
}
class Node {
  constructor(val) {
          this.val = val;
                this.next = null;
                    }
                  }
                  
                  module.exports = Node;
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
linkedListValues(a);
a.next = b;
b.next = c;
c.next = d;
linkedListValues(a);