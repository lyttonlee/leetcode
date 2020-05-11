/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let num = 0
  let canCode = (code) => {
    
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '0') {
      num++
      if (s[i] * 1 < 3 && i < s.length -1 && s[i + 1] * 1 <= 6) {
        num++
      }
    }
  }
  return num
};

console.log(numDecodings('12301'))