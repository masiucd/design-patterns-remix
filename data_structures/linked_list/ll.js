class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
    return this;
  }

  insertLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
    return this;
  }

  showNodes() {
    const xs = [];
    let node = this.head;
    while (node !== null) {
      xs.push(node.data);
      node = node.next;
    }
    return xs;
  }

  get(index) {
    let counter = 0;
    let node = this.head;
    while (index !== counter) {
      counter++;
      node = node.next;
    }
    return node;
  }

  insert(index, data) {
    if (index === 0) return this.insertFirst(data);
    if (index < 0 || index > this.size) return undefined;
    const newNode = new Node(data);
    const prev = this.get(index - 1);
    const pointer = prev.next;
    prev.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  deleteFirst() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.size -= 1;
    return this;
  }

  delete(index) {
    if (index === 0) return this.deleteFirst();
    if (index < 0 || index > this.size) return undefined;
    const prev = this.get(index - 1);
    const nodeToDelete = prev.next;
    prev.next = nodeToDelete.next;
    this.size -= 1;
    return this;
  }

  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const ll = new LinkedList();
ll.insertFirst('apple');
ll.insertFirst('banana');
ll.insertLast('pear');
ll.insertLast('kiwi');
ll.insert(2, 'mango');
ll.insert(0, 'jackfruit');
// ll.delete(0);
ll.reverse();
console.log(ll.showNodes());
