import { createBinaryTree } from "./tree.js";

/** Preorder Traversal */
function dfs_preorder(node, out) {
  if (node === null) return;

  out.push(node.value);
  dfs_preorder(node.left, out);
  dfs_preorder(node.right, out);

  return out;
}

/** Inorder Traversal */
function dfs_inorder(node, out) {
  if (node === null) return;

  dfs_inorder(node.left, out);
  out.push(node.value);
  dfs_inorder(node.right, out);
}

/** Postorder Traversal */
function dfs_postorder(node, out) {
  if (node === null) return;

  dfs_postorder(node.left, out);
  dfs_postorder(node.right, out);
  out.push(node.value);
}

const root = createBinaryTree();
const dfs_preorder_res = [];
const dfs_inorder_res = [];
const dfs_postorder_res = [];

dfs_preorder(root, dfs_preorder_res);
dfs_inorder(root, dfs_inorder_res);
dfs_postorder(root, dfs_postorder_res);

console.log("dfs_preorder_res >> ", dfs_preorder_res);
console.log("dfs_inorder_res >> ", dfs_inorder_res);
console.log("dfs_postorder_res >> ", dfs_postorder_res);
