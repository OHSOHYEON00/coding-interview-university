class ListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class HashTable {
  constructor(m) {
    this.table = new Array(m);
    this.size = m;
  }

  /** return key by hash function */
  getKey(key) {
    let newKey = key;

    switch (typeof key) {
      case "string":
        newKey = key.charCodeAt();
        return newKey % this.size;

      case "number":
        return newKey % this.size;

      default:
        console.log("Not allowed typeof key");
        return;
    }
  }

  /** if key already exists, update value */
  add(key, value) {
    const index = this.getKey(key);
    this.table[index] = value;
  }

  /** returns if there's a element in key */
  exists(key) {
    const index = this.getKey(key);
    return !!this.table[index];
  }

  /** same function with search */
  get(key) {
    const index = this.getKey(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.getKey(key);
    this.table[index] = null;
  }
}

const hashtable = new HashTable(10);

hashtable.add(1, 10);
console.log(hashtable);
hashtable.add(20, 20);
hashtable.add(50, 50);
console.log(hashtable);
hashtable.add(55, 55);
hashtable.add(54, 54);
console.log(hashtable);
hashtable.add(26, 26);
hashtable.add(24, 24);
hashtable.add("뭐야", "hash");

console.log(hashtable.exists(24));
console.log(hashtable.get("뭐야"));
hashtable.remove("뭐야");

console.log(hashtable);
