// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 如果数组中不存在目标值，返回 [-1, -1]。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1]
  let left=0
  let right = nums.length - 1
  let mid
  while(left <= right) {
      mid = Math.floor((left + right) / 2)
      console.log(mid)
      if (nums[mid] === target) {
          // return mid
          break
      } else if (nums[mid] < target) {
          left = mid+1
      } else if (nums[mid] > target) {
          right = mid-1
      }

  }
  if (left > right) return [-1, -1]
  left = right = mid
  while (nums[left-1] === nums[mid]) {
    left--
  }
  while (nums[right+1] === nums[mid]) {
    right++
  }
  return [left, right]
};

let n = [1,2,2,5,5,7,8]
let n2 = [1, 3, 5, 6, 7,8]

// console.log(searchRange(n, 2))
console.log(searchRange(n, 1))
