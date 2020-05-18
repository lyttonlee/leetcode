// 给定一个只包括 '(',')','{','}','[',']' 的字符串,判断字符串是否有效。

// 有效字符串需满足：

//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。

// 注意空字符串可被认为是有效字符串。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) return true
  let starts = ['(','{','[']
  let ends = [')','}',']']
  let map = {
    '(':')',
    '{':'}',
    '[':']'
  }
  function isStart (bracket) {
    return bracket === '(' || bracket === '{' || bracket === '['
  }
  function isCouple (start, end) {
    // if (starts.findIndex(braket => start === braket) === ends.findIndex(braket => end === braket)) {
    //   return true
    // } else {
    //   return false
    // }
    if (map[start] === end) {
      return true
    } else {
      return false
    }
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (isStart(s[i])) {
      stack.push(s[i])
    } else {
      if (isCouple(stack[stack.length - 1], s[i])) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0 ? true : false
};

let b = ['(', '}', '{', ')']

console.log(isValid(b))