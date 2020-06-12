// 739. 每日温度
// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    // 递减栈
    let len = T.length
    let res = new Array(len).fill(0)
    let stack = [] // 递减栈保存的是当前最大温度的下标 
    stack.push(0)
    function getStackTop () {
      return stack[stack.length-1]
    }
    for (let i = 1; i < len; i++) {
      while (stack.length > 0 && T[i] > T[getStackTop()]) {
        res[getStackTop()] = i - getStackTop()
        stack.pop()
      }
      stack.push(i)
    }
    return res
};