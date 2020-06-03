// 5. 最长回文子串
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // let left, right
  if (s.length < 2) return s
  let maxStr = ''
  let maxLen = 0
  function extend (left, right) {
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      if (right-left+1 > maxLen) {
        maxLen = right-left+1
        maxStr = s.slice(left, right+1)
      }
      left--
      right++
    }
  }
  for (let i = 0; i < s.length; i++) {
    extend(i, i+1)
    extend(i,i)
  }
  // console.log(maxLen)
  return maxStr
};

let s = 'sadaskjhdjkas'

console.log(longestPalindrome(s))

// 输入: array1 = [4, 1, 2, 1, 1, 2], array2 = [3, 6, 3, 3]
// 输出: [1, 3]