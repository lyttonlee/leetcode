/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心 - 局部最优解 合并为 整体最优解
var maxProfit = function(prices) {
  
  let reward = 0

  for (let i = 1; i < prices.length; i++) {
    let curReward = prices[i] - prices[i-1]
    if (curReward > 0) {
      reward += curReward
    }
  }
  
  return reward
};