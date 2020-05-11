/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let res = 0
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
          res++
        }
      }
    }
    return res
}
let nums = [7, 6, 4, 5]
// console.log(reversePairs(nums))

console.log(Math.pow(2, 3))