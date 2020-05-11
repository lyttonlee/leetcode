/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s
  }
  let start = 0
  let maxLenth = 1
  /**
   *
   *
   * @param {number} left
   * @param {number} right
   */
  const expandString = function (left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLenth) {
        maxLenth = right - left + 1
        start = left
      }
      left--
      right++
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandString(i-1, i+1)
    expandString(i, i+1)
  }
  return s.substr(start, maxLenth)
}

console.log(longestPalindrome('asedes'))