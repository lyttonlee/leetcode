// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

// 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
var maxProfit = function(prices) {
  if (prices.length === 0) return 0
  let dp = []
  dp[0] = []
  dp[0][1] = 0
  let minBuy = prices[0]
  // dp[i][j] 第i天第j次交易(卖出股票)获取得最大利润
  for (let i = 1; i < prices.length; i++) {
    // dp[i][] = 
    dp[i] = []
    dp[i][1] = Math.max(0, prices[i] - minBuy)
    minBuy = prices[i]
    dp[i][2] = Math.max(dp[i-1][1], dp[i-1][1] + prices[i] - minBuy)
    minBuy = Math.min(minBuy, prices[i])
  }
  return Math.max(dp[prices.length-1][1], dp[prices.length-1][2])
};

let p = [7, 3, 5, 4, 2]
console.log(maxProfit(p))