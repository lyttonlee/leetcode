// 502. IPO
// 假设 力扣（LeetCode）即将开始其 IPO。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。

// 给定若干个项目。对于每个项目 i，它都有一个纯利润 Pi，并且需要最小的资本 Ci 来启动相应的项目。最初，你有 W 资本。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。

// 总而言之，从给定项目中选择最多 k 个不同项目的列表，以最大化最终资本，并输出最终可获得的最多资本。

// 示例 1:

// 输入: k=2, W=0, Profits=[1,2,3], Capital=[0,1,1].

// 输出: 4

// 解释:
// 由于你的初始资本为 0，你尽可以从 0 号项目开始。
// 在完成后，你将获得 1 的利润，你的总资本将变为 1。
// 此时你可以选择开始 1 号或 2 号项目。
// 由于你最多可以选择两个项目，所以你需要完成 2 号项目以获得最大的资本。
// 因此，输出最后最大化的资本，为 0 + 1 + 3 = 4。
 

// 注意:

// 假设所有输入数字都是非负整数。
// 表示利润和资本的数组的长度不超过 50000。
// 答案保证在 32 位有符号整数范围内。

/**
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 */
var findMaximizedCapital = function(k, W, Profits, Capital) {
  // 暴力法 -》 可以清楚需求和过程
  // 通过了虽然没有超时，但打败了5%的js，优化吧
  // if (k === 0) return 0
  // while (k > 0) {
  //   // 找出需要启动成本小于初始成本的项目，然后找出这些项目中利润最大的一个，完成他 然后将初始成本加上利润
  //   // 移除这个项目
  //   // 重复这个过程
  //   // 1
  //   let maxPro = {
  //     profit: 0,
  //     index: 0
  //   }
  //   for (let i = 0; i < Capital.length; i++) {
  //     if (Capital[i] <= W) {
  //       // maxPro = Math.max(maxPro, Profits[i])
  //       if (Profits[i] > maxPro.profit) {
  //         maxPro = {
  //           profit: Profits[i],
  //           index: i
  //         }
  //       }
  //     }
  //   }
  //   W+=maxPro.profit
  //   // 2
  //   Profits.splice(maxPro.index, 1)
  //   Capital.splice(maxPro.index, 1)
  //   k--
  // }
  // return W

  // 贪心 ？ 动态规划 ？

  // let dp = []
  // dp[0] = W // 第0次完成拥有初始资本
  // // dp[i] i<=k 第i次完成项目后的最大资本
  // // dp[i] = dp[i-1] + (当前能完成项目的最大回报利润)
  // //  最大利润 = ？ math.max(...profits)
  // for (let i = 1; i <= k; i++) {
  //   let profit = 0
  //   dp[i] = dp[i-1] + profit // 和暴力一样 重新写方程
  // }

  // 堆 贪心 ？
  // 创建一个排序的项目列表 按启动资金排序/按回报排序 [{cap: 0, profit: xx}, {}] 
  // let projects = Capital.map((cap, i) => {
  //   return {
  //     profit: Profits[i],
  //     cap: cap
  //   }
  // })
  // // 按回报从大到小的顺序排列
  // projects.sort((a, b) => a.profit - b.profit >= 0 ? -1 : 1)
  // for (let i = 0; i < k; i++) {
  //   let j = 0
  //   let len = projects.length
  //   while (j < len) {
  //     if (projects[j].cap <= W) { // 可以启动的项目,就是当前最赚钱的项目
  //       W+=projects[j].profit
  //       // 弹出这个项目
  //       projects.splice(j, 1)
  //       break
  //     }
  //     j++
  //   }
  // }
  // return W


  // 这用时看不懂
  // let compositeGroup = Profits.map((current, idx)=>{
  //     return [current, Capital[idx]]
  // }).sort((a,b)=>{return b[0] - a[0] })
  // for(let i=0;i<k;i++) {
  //     for(let j=0;j<compositeGroup.length;j++){
  //         if(compositeGroup[j][1]<=W) {
  //             W+=compositeGroup[j][0]
  //             compositeGroup.splice(j, 1)
  //             break
  //         }
  //     }
  // }
  // return W
};