// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

 

// 示例 1:

// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。

// 示例 2:

// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let len = nums.length
  let dp = []
  // dp[i][0]  到nums i 的最小乘积
  // dp[i][1]  到 nums i 的最大乘积
  dp[0] = []
  dp[0][0] = nums[0]
  dp[0][1] = nums[0]
  let res = Math.max(dp[0][1], 0)
  for (let i = 1; i < len; i++) {
    dp[i] = []
    dp[i][0] = Math.min(dp[i-1][0] * nums[i], nums[i], dp[i-1][1] * nums[i])
    dp[i][1] = Math.max(dp[i-1][0] * nums[i], nums[i], dp[i-1][1] * nums[i])
    // console.log(dp)
    res = Math.max(res, dp[i][1])
  }
  return res
};

let n = [2,3,-2, 4, -3]
console.log(maxProduct(n))