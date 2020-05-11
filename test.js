const a = 'cbc'
const b = 'bcd'
console.log(a > b)
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // cost.push(0)
  let dp = []
  dp[0] = cost[0]
  dp[1] = Math.min(cost[0], cost[1])
  for (let i = 2; i <= cost.length; i++) {
    if (i === cost.length) {
      dp[i] = Math.min(dp[i-2], dp[i-1])
    } else {
      dp[i] = Math.min(dp[i-2], dp[i-1]) + cost[i]
    }
    console.log(dp[i])
    console.log(dp)
  }
  return dp[cost.length]
};

let cost = [0,1,1,0]
// console.log(minCostClimbingStairs(cost))

let x = '-123'
// console.log(x)
let y = ''
let isLast = true
for (let i = x.length -1; i >= 0; i--) {
  if (isLast && x[i] == '0') {
    y+=''
  } else {
    y+=x[i]
    isLast = false
  }
  
}
if (y[y.length - 1] === '-') {
  console.log('do')
  y = y.replace('-', '')
  console.log(y)
  y = y * -1
} else {
  y = y * 1
}
if (y > Math.pow(2, 31) - 1 || y < Math.pow(2, 31) * -1) {
  return 0
} else {
  return y
}
console.log(y)
