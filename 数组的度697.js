// 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

// 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

// 示例 1:

// 输入: [1, 2, 2, 3, 1]
// 输出: 2
// 解释: 
// 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
// 连续子数组里面拥有相同度的有如下所示:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// 最短连续子数组[2, 2]的长度为2，所以返回2.

// 示例 2:

// 输入: [1,2,2,3,1,4,2]
// 输出: 6


/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let numsDeg = 1
  let map = new Map()
  for(let i = 0;i<nums.length;i++) {
      if (map.has(nums[i])) {
          // map.set(nums[i], map.get(nums[i])++)
          map.set(nums[i], {
            start: map.get(nums[i]).start,
            count: map.get(nums[i]).count + 1,
            end: i
          })
          numsDeg = Math.max(numsDeg, map.get(nums[i]).count)
      } else {
          map.set(nums[i], {
            start: i,
            count: 1,
            end: i
          })
      }
      
  }
  // console.log(map)
  let min = nums.length
  for (const [, value] of map) {
    console.log(value)
    if (numsDeg === value.count) { // 度相同的
      min = Math.min(min, value.end - value.start + 1)
    }
  }
  return min
};

let n = [1,2,2,3,1,4,2]
console.log(findShortestSubArray(n))