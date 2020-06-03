// 105. 从前序与中序遍历序列构造二叉树
// 根据一棵树的前序遍历与中序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (inorder.length === 0) return null
  let root = preorder[0]
  let leftInorder = inorder.slice(0, inorder.findIndex((num) => num === root))
  let rightInORDER = inorder.slice(inorder.findIndex((num) => num === root)+1)
  let leftPreorder = preorder.slice(1, leftInorder.length+1)
  let rightPreorder = preorder.slice(leftInorder.length+1)
  const rootTree = new TreeNode(root)
  rootTree.left = buildTree(leftPreorder, leftInorder)
  rootTree.right = buildTree(rightPreorder, rightInORDER)
  return rootTree
};