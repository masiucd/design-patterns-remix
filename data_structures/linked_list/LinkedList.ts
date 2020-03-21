interface INode {
  data: number | null;
  next: INode | null;
}

class Node {
  data: number | null;

  next: INode | null;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LikedList {
  head: INode | null;

  tail: INode | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(data: number): this {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    return this;
  }

  insertLast(data: number): this {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
    return this;
  }

  getNode(index: number): INode {
    let counter = 0;
    let node = this.head;
    while (index !== counter) {
      counter += 1;
      node = node.next;
    }
    return node;
  }

  insert(index: number, data: number): this {
    if (index === 0) return this.insertFirst(data);
    if (index < 0 || index > this.size) return undefined;
    const newNode = new Node(data);
    const prevNode = this.getNode(index - 1);
    const pointer = prevNode.next;
    prevNode.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  dropHead(): this {
    if (!this.head) return undefined;
    this.head = this.head.next;
    return this;
  }

  delete(index: number): this {
    if (index === 0) return this.dropHead();
    if (index < 0 || index > this.size) return undefined;
    const prevNode = this.getNode(index - 1);
    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    this.size -= 1;
    return this;
  }

  showList(): number[] {
    const xs: number[] = [];
    let node = this.head;
    while (node !== null) {
      xs.push(node.data);
      node = node.next;
    }
    return xs;
  }

  reverse(): this {
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

const ll = new LikedList();
ll.insertFirst(9);
ll.insertLast(12);
ll.insertFirst(98);
ll.insertFirst(102);
ll.insert(1, 555);
ll.insert(0, 10000);
ll.delete(0);
ll.delete(2);
ll.reverse();
console.log(ll.showList());
