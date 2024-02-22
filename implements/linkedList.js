class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /** returns number of data elements in list */
  size() {
    let result = 0;
    let node = this.head;

    while (node) {
      result++;
      node = node.next;
    }

    return result;
  }

  /** bool returns true if empty */
  empty() {
    return this.head === null;
  }

  value_at(index) {
    let count = 0;
    let node = this.head;

    while (node) {
      if (count === index) {
        break;
      }

      count++;
      node = node.next;
    }

    return node;
  }

  /** adds an item to the front of the list */
  push_front(value) {
    const node = new ListNode(value);
    const head = this.head;

    node.next = head;
    this.head = node;
  }

  /** adds an item at the end */
  push_back(value) {
    const node = new ListNode(value);
    const lastNode = this.back();

    lastNode.next = node;

    return list;
  }

  /** get value of front item */
  front() {
    return this.head;
  }

  /** get value of end item */
  back() {
    const size = this.size();
    const lastNode = this.value_at(size - 1);

    return lastNode;
  }

  get_all() {
    let node = this.head;

    while (node) {
      node !== undefined && console.log(node);
      node = node.next;
    }
  }

  /** remove front item and return its value */
  pop_front() {
    const head = this.head;
    const next = this.head.next;

    this.head = next;

    return head.data;
  }

  /** removes end item and returns its value */
  pop_back() {
    const back = this.back();
    const size = this.size(),
      prev = this.value_at(size - 2);

    prev.next = null;

    return back.data;
  }

  /** insert value at index, so current item at that index is pointed to by new item at index */
  insert(index, value) {
    if (index >= this.size()) {
      this.push_back(value);
    } else if (index <= 0) {
      this.push_front(value);
    } else {
      const newNode = new ListNode(value);

      const prev = this.value_at(index - 1),
        cur = this.value_at(index);

      prev.next = newNode;
      newNode.next = cur;
    }
  }

  /** removes node at given index and returns removed element */
  erase(index) {
    const cur = this.value_at(index);

    if (index <= 0) {
      this.pop_front();
    } else if (index >= this.size()) {
      this.pop_back();
    } else {
      const prev = this.value_at(index - 1),
        next = cur.next;

      prev.next = next;
    }

    return cur?.data;
  }

  /** returns the value of the node at nth position from the end of the list */
  value_n_from_end(n) {
    const lastIndex = this.size() - 1,
      cur = this.value_at(lastIndex - n);

    return cur.data;
  }

  /**  reverses the list */
  reverse() {
    let cur = this.head,
      prev = null,
      next = cur.next;

    while (cur) {
      cur.next = prev;
      prev = cur;

      cur = next;
      next = cur?.next;

      if (cur === null) {
        this.head = prev;
      }
    }
  }

  /** removes the first item in the list with this value */
  remove_value(value) {
    let node = this.head,
      index = 0;

    while (node) {
      if (node.data === value) {
        break;
      }

      node = node.next;
      index++;
    }

    this.erase(index);
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);

node1.next = node2;

const list = new LinkedList(node1);
list.push_back(3);
list.push_front(5);
list.push_front(4);
list.insert(2, 4);
list.insert(5, 4);
// list.insert(10, 4);
// list.push_front(6);

console.log("prev >>");
list.get_all();

list.reverse();

// list.remove_value(4);
console.log("next to reversed >>");
list.get_all();
