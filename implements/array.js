// Control + option + N -> execute js file

class CArray {
  constructor(arr) {
    this.arr = arr;
    this.length = arr.length;
  }

  /** Returns number of items */
  size() {
    return this.arr.length;
  }

  /** Returns true when array is empty (length is 0 or filled with empty elements) */
  is_empty() {
    return this.arr.length === 0 || this.arr.every((item) => isNaN(item));
  }

  /** Returns item at given index, blows up if index out of bounds */
  at(index) {
    if (index < 0 || index > this.arr.length) {
      return "Invalid index";
    }

    return this.arr[index];
  }

  /** Returns the new length after push item */
  push(item) {
    this.arr[this.arr.length] = item;
    this.length += 1;
    return this.arr.length;
  }

  /** inserts item at index, shifts that index's value and trailing elements to the right */
  insert({ index, item }) {
    for (let i = this.arr.length; i >= index; i--) {
      this.arr[i] = this.arr[i - 1];
    }

    this.arr[index] = item;
    this.length += 1;
  }

  /** use insert above at index 0 */
  prepend(item) {
    this.insert({ index: 0, item });
  }

  /** remove from end, return value */
  pop() {
    const lastItem = this.arr[this.arr.length - 1];

    this.arr.length = this.arr.length - 1;

    this.length -= 1;

    return lastItem;
  }

  /** delete item at index, shifting all trailing elements left */
  delete(index) {
    for (let i = index; i < this.arr.length; i++) {
      this.arr[i] = this.arr[i + 1];
    }

    this.arr.length = this.arr.length - 1;
    this.length -= 1;
  }

  /** looks for value and removes index holding it (even if in multiple places) */
  remove(item) {
    const removeIdx = new CArray([]);

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === item) {
        removeIdx.push(i);
      }
    }

    for (let j = 0; j < removeIdx.length; j++) {
      const idx = removeIdx.at(j);
      this.delete(idx);
    }
  }

  /** looks for value and returns first index with that value, -1 if not found */
  find(item) {
    let result = -1;

    loop: for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === item) {
        result = i;
        break loop;
      }
    }

    return result;
  }

  /** creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string */
  join(str) {
    let result = "";
    let separator = str === undefined ? "," : str;

    for (let i = 0; i < this.arr.length; i++) {
      result += `${this.arr[i]}${i === this.length - 1 ? "" : separator}`;
    }

    return result;
  }

  /** Array.prototype.reduce() */
  reduce(callbackFn, initial) {
    const isInitial = initial !== undefined;
    let result = isInitial ? initial : this.arr[0];

    for (let i = isInitial ? 0 : 1; i < this.arr.length; i++) {
      result = callbackFn(result, this.arr[i]);
    }

    return result;
  }

  /** removes the first element from an array and returns that removed element. */
  shift() {
    const removedItem = this.arr[0];
    this.delete(0);

    return removedItem;
  }

  /**
   * adds the specified elements to the beginning of an array and returns the new length of the array.
   * @param args : element1, element2, element3,  ..., elementN
   * */
  unshift(...args) {
    for (let i = args.length - 1; i >= 0; i--) {
      this.prepend(args[i]);
    }

    return this.length;
  }

  // slice, sort/toSorted, splice
}

const arr = new CArray([1, 2, 3, 4, 5]);

arr.insert({ index: 2, item: 10 });
arr.insert({ index: 4, item: 6 });

console.log(arr.shift());
console.log(arr.unshift(1, 2, 3));
console.log(arr);
