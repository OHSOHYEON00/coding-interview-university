/** Create Tree for implementations of Traversal Binary Tree */

class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const createBinaryTree = () => {
  function createNode(value) {
    return new BinaryNode(value);
  }

  function createNodeArray(size) {
    const result = [];

    for (let i = 1; i <= size; i++) {
      result.push(createNode(i));
    }

    return result;
  }

  function edge(parent, left = null, right = null) {
    parent.left = left;
    parent.right = right;
  }

  const root = createNode(0);
  const nodes = createNodeArray(12);

  edge(root, nodes[0], nodes[1]);
  edge(nodes[0], nodes[2], nodes[3]);
  edge(nodes[1], nodes[4], nodes[5]);
  edge(nodes[2], nodes[6], nodes[7]);
  edge(nodes[3], nodes[8]);
  edge(nodes[4], nodes[9]);
  edge(nodes[5], nodes[10], nodes[11]);

  return root;
};

class Node {
  constructor(val, parent = null, children = []) {
    this.val = val;
    this.parent = parent;
    this.children = children;
  }

  setParent(parent) {
    this.parent = parent;
  }

  setChild(children = []) {
    this.children = children;
  }
}

export const createTree = () => {
  function createNode(value, parent, child = []) {
    return new BinaryNode(value, parent, child);
  }

  function createNodeArray(size) {
    const result = [];

    for (let i = 1; i <= size; i++) {
      result.push(createNode(i));
    }

    return result;
  }

  const root = createNode(0, null);
};
