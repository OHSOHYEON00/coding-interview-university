class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class queueList {
  constructor(node = null) {
    this.head = node;
    this.tail = node;
  }

  /** adds value at position at tail */
  enqueue(value) {
    const node = new ListNode(value);
    const prevHead = this.head;

    node.next = prevHead;
    this.head = node;
  }

  /** returns value and removes least recently added element (front) */
  dequeue() {
    if (this.empty()) {
      return "Queue is empty.";
    }

    const prevHead = this.head;
    const next = prevHead.next;

    this.head = next;

    return prevHead;
  }

  empty() {
    return this.head === null;
  }

  get_all() {
    if (this.empty()) {
      return "Queue is empty.";
    }

    let node = this.head;

    while (node) {
      node !== undefined && console.log(node);
      node = node.next;
    }
  }
}

class queueArray {
  constructor(size = 0) {
    this.queue = new Array(size);
    this.queue.fill(undefined);

    this.readIdx = 0;
    this.writeIdx = 1;
    this.size = size;
  }

  circularPointer(idx) {
    if (idx === this.size - 1) {
      return 0;
    } else {
      return idx + 1;
    }
  }

  /** adds item at end of available storage */
  enqueue(value) {
    if (value === undefined) {
      console.log("Can't enqueue undefined value");
    }

    const nextIdx = this.circularPointer(this.writeIdx);

    if (nextIdx === this.readIdx) {
      console.log(`Queue is full while doing enqueue ${value}`);
    } else {
      this.queue[this.writeIdx] = value;
      this.writeIdx = nextIdx;

      const readNextIdx = this.circularPointer(this.readIdx);
      this.readIdx = readNextIdx;
    }
  }

  /** returns value and removes least recently added element */
  dequeue() {
    const removed = this.queue[this.readIdx];

    if (removed === undefined) {
      console.log("Queue is empty");
      return;
    }

    this.queue[this.readIdx] = undefined;

    const nextIdx = this.readIdx - 1 < 0 ? this.size - 1 : this.readIdx - 1;

    this.readIdx = nextIdx;

    return removed;
  }

  empty() {
    return this.readIdx === this.writeIdx;
  }

  full() {
    return this.writeIdx === this.size - 1;
  }

  get_all() {
    console.log(this.queue);
  }
}

/** Queue with linked list */
const node1 = new ListNode(1);
const node2 = new ListNode(2);

const list = new queueList();

list.enqueue(2);
console.log("removed", list.dequeue());

console.log("empty", list.empty());

list.get_all();

/** Queue with fixed sized array */

const queue = new queueArray(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.get_all();

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
// queue.dequeue();

queue.get_all();
