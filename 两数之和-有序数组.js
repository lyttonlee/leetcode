/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = new Map()
  for (let i = 0; i < numbers.length; i++) {
    let key = target - numbers[i]
    if (map.has(key) && map.get(key) !== i + 1) {
      return [map.get(key), i + 1]
    }
    map.set(numbers[i], i + 1)
  }
};