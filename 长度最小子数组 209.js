// 209. 长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

// 示例: 

// 输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
// 进阶:

// 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (nums[0] >= s) return 1
  // let subArr = [nums[0]]
  let sum = nums[0]
  let left = 0, right = 0
  let minLen = nums.length
  for (let i = 1; i < nums.length; i++) {
    // subArr.push(nums[i])
    right = i
    sum = sum + nums[i]
    console.log(sum)
    if (sum >= s) {
      
      while (sum - nums[left] >= s) {
        sum = sum - nums[left]
        left++
        
        // subArr.shift()
        // minLen = Math.min(minLen, subArr.length)
      }
      console.log(minLen)
      minLen = Math.min(minLen, right-left+1)
    }
  }
  return sum >= s ? minLen : 0
};

// 7
let n = [1,2,3,4,5]

console.log(minSubArrayLen(15, n))