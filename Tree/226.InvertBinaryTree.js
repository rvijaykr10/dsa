// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Input: root = [2,1,3]
// Output: [2,3,1]

// Input: root = []
// Output: []

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = (root) => {
  const isBaseCase = root === null;
  if (isBaseCase) return root;

  return dfs(root);
};

const dfs = (root) => {
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};

const root = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 7,
    left: { val: 6, left: null, right: null },
    right: { val: 9, left: null, right: null },
  },
};
// const root = {
//   val: 2,
//   left: { val: 1, left: null, right: null },
//   right: { val: 3, left: null, right: null },
// };

const result = invertTree(root);
console.log(result);
