let m = new Map()
m.set(1, 1)
console.log(m.has('1'))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    if (map.has(key) && map.get(key) !== i) {
      return [i, map.get(key)]
    }
    map.set(nums[i], i)
  }
};

console.log(twoSum([2,7,11,3], 9))