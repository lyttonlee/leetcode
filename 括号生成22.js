// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

// 示例：

// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]



/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = []
  let curStr = ''
  function dfs (left, right, str) {
    if (left ===0 && right === 0) {
      res.push(str)
      return
    }
    if (right > left) {
      dfs(left, right-1, str+')')
    }
    if (left > 0) {
      dfs(left-1, right, str + '(')
    }
    
  }
  dfs(n,n,curStr)
  return res
};

console.log(generateParenthesis(3))