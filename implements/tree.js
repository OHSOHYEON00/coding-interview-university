/** Create Tree for implementations of Traversal Tree */

export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const createTree = () => {
  function createNode(value) {
    return new Node(value);
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
