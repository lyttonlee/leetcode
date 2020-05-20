// 680. 验证回文字符串 Ⅱ

// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:

// 输入: "aba"
// 输出: True

// 示例 2:

// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。

/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s) {
  let left = 0, right = s.length - 1
  while (left < right) {
      if (s[left] === s[right]) {
      left++
      right--
      } else {
        return isPali(left+1, right, s) || isPali(left, right-1, s)
      }
  }
  function isPali (left, right, s) {
    while (left < right) {
      if(s[left] === s[right]) {
        left++
        right--
      } else {
        return false
      }
    }
    return true
  }
  return true
};

let s = 'ebcbbececabbacecbbcbe'
let s2 = 'ececabbacec'
console.log(validPalindrome(s2))
