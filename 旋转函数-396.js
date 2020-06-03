// 396. 旋转函数
// 给定一个长度为 n 的整数数组 A 。

// 假设 Bk 是数组 A 顺时针旋转 k 个位置后的数组，我们定义 A 的“旋转函数” F 为：

// F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1]。

// 计算F(0), F(1), ..., F(n-1)中的最大值。

// 注意:
// 可以认为 n 的值小于 105。

// 示例:

// A = [4, 3, 2, 6]

// F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
// F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
// F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
// F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

// 所以 F(0), F(1), F(2), F(3) 中的最大值是 F(3) = 26 。


/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  if (A.length < 2) return 0
  function sumArr (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += i * arr[i]
    }
    return sum
  }
  let sum = 0
  let maxF = -Infinity
  for (let i = 0; i < A.length; i++) {
    // let popEle = A.pop()
    if (i !== 0) {
      // [A[0], A[A.length - 1]] = [A[A.length - 1], A[0]]
      let popEle = A.pop()
      A.unshift(popEle)
    }
  //   console.log(A)
    sum = sumArr(A)
    maxF = Math.max(maxF, sum)
  }
  return maxF
};


let arr1 = [1, 2, 3, 5];

console.log(maxRotateFunction(arr1))
// [arr1[0], arr1[arr1.length - 1]] = [arr1[arr1.length - 1], arr1[0]]
// [arr1[3], arr1[2]] = [arr1[2], arr1[3]]
console.log(arr1)

let array = [1,2,3,4,5,6];
//对下标为2和3的元素进行交换
[array[2],array[3]]=[array[1],array[4]]
console.log(array)
//输出
//[1, 2, 4, 3, 5, 6]
