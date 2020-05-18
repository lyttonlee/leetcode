// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

//     首先找到需要删除的节点；
//     如果找到了，删除它。

// 说明： 要求算法时间复杂度为 O(h)，h 为树的高度。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root.val === null) return root
  if (root.val === key) { // 要删除的点正是当前树的根
    // 分三种情况
    // 1. 这个根没有左子树也没有右子树，那就直接删除这个节点
    if (root.left === null && root.right === null) {
      root.val = null
    } else if (root.left && root.right) { // 2. 既有左子树又有右子树
      let successor = root.right
      while (successor.left !== null) {
        successor = successor.left
      }
      successor.left = root.left // 将root的左子树挂在successor节点(右子树中的最后一个左叶子节点)的左子树上
      root = root.right 
    } else { // 3. 仅有左子树或者仅有右子树， 直接将子树替换当前节点
      // root.left ? root.val = root.left : root.val = root.right
      if (root.left) {
        root.val = root.left
        root.left = null
      } else {
        root.val = root.right
        root.right = null
      }
    }
  } else if (key < root.val) { // 要删除的点位于左子树上
    root.left = deleteNode(root.left, key)
  } else if (key > root.val) { // 要删除的点位于右子树上
    root.right = deleteNode(root.right, key)
  }
  return root
};
