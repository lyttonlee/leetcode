// 718. 最长重复子数组
// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

// 示例 1:

// 输入:
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// 输出: 3
// 解释: 
// 长度最长的公共子数组是 [3, 2, 1]。
// 说明:

// 1 <= len(A), len(B) <= 1000
// 0 <= A[i], B[i] < 100

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  var max = 0;
  var n1 = A.length;
  var n2 = B.length;
  var dp = Array.from(new Array(n1 + 1),() => new Array(n2 + 1).fill(0));
  for(let i = 1; i <= n1; i++){
      for(let j = 1; j <= n2; j++){
          if(A[i-1] == B[j-1]){
              dp[i][j] = dp[i-1][j-1] +1;
              max = Math.max(dp[i][j], max)
          }
      }
  }
  return max;
};
// 大概率超时的暴力双循环
var findLength2 = function(A, B) {
  let maxLen = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        let curLen = 1
        while (A[i+curLen] === B[j+curLen] && i+curLen < A.length && j+curLen < B.length) {
          curLen++
        }
        maxLen = Math.max(curLen, maxLen)
      }
      
    }
  }
  return maxLen
};

 let A = [1,0,0,0,1]
//  [1,0,0,0,0]
let B = [1,0,0,1,1]

console.log(findLength(A, B))