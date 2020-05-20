// 337. 打家劫舍 III

// 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

// 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

// 示例 1:

// 输入: [3,2,3,null,3,null,1]

//      3
//     / \
//    2   3
//     \   \ 
//      3   1

// 输出: 7 
// 解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.

// 示例 2:

// 输入: [3,4,5,1,3,null,1]

//      3
//     / \
//    4   5
//   / \   \ 
//  1   3   1

// 输出: 9
// 解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  if (!root.left && !root.right) return root.val
  // let sum = 0
  function dfs (tree, sum=0) {
    if (tree.val !== null) {
      sum += tree.val
    }
    if (tree.left) {
      tree.left.left ? sum = dfs(tree.left.left, sum) : sum = sum
      // sum += dfs(tree.left.right, sum)
      tree.left.right ? sum = dfs(tree.left.right, sum) : sum = sum
    }
    if (tree.right) {
      // sum += dfs(tree.right.left, sum)
      // sum += dfs(tree.right.right, sum)
      tree.right.left ? sum = dfs(tree.right.left, sum) : sum = sum
      // sum += dfs(tree.left.right, sum)
      tree.right.right ? sum = dfs(tree.right.right, sum) : sum = sum
    }
    return sum
  }

  return Math.max(dfs(root, 0), dfs(root.left, 0) + dfs(root.right, 0))
};