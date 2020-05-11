/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力循环
var maxProfit = function(prices) {
  let maxReward = 0
  for (let i=0;i<prices.length-1;i++) {
      const buyPrice = prices[i]
      for(let j=i+1;j<prices.length;j++) {
          let sellPrice = prices[j]
          let reward = sellPrice - buyPrice
          reward > 0 ? maxReward = Math.max(reward, maxReward) : 0
      }
  }
  return maxReward
};

var maxProfit2 = function(prices) {
  // 思路 维护一个变量记录到第i天的最低买入价格 minPrice
  // 第i天的最大回报就是 prices[i] - minPrice
  // 同时判断是否更新最大收益和最小买入价格
  let maxReward = 0
  let minPrice = prices[0]
  let reward = 0
  for (let i = 1; i < prices.length; i++) {
    reward = prices[i] - minPrice
    minPrice = Math.min(minPrice, prices[i])
    maxReward = Math.max(maxReward, reward)
  }
  return maxReward
};