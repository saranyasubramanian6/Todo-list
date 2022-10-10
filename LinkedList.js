class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function isCircular(head) {
  if (head == null) return true;
  node = head.next;
  while (node != null && node != head) node = node.next;
  return node == head;
}

function newNode(data) {
  temp = new Node();
  temp.data = data;
  temp.next = null;
  return temp;
}

head = newNode(1);
head.next = newNode(2);
head.next.next = newNode(3);
head.next.next.next = newNode(4);

document.write(isCircular(1) ? "Yes<br/>" : "No<br/>");

head.next.next.next.next = head;

document.write(isCircular(4) ? "Yes<br/>" : "No<br/>");

isCircular(head);
