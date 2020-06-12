// 面试题29. 顺时针打印矩阵
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

 

// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

// 限制：

// 0 <= matrix.length <= 100
// 0 <= matrix[i].length <= 100
// 注意：本题与主站 54 题相同：https://leetcode-cn.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = []
  let left=0,right=matrix[0].length-1,top=0,bottom=matrix.length-1
  let direction = 'right'
  let i=0,j=0
  // ..
  while (i>=top && i<=bottom && j>=left && j<=right) {
      if (direction === 'right') {
          // res.push(matrix[i][j])
          if (j === right) {
              direction = 'down'
              top++
              i++
              continue
          } else {
              j++
          }
      }
      if (direction === 'down') {
        console.log(i , j)
          res.push(matrix[i][j])
          if (i === bottom) {
              direction = 'left'
              right--
              j--
              continue
          } else {
              i++
          }
      }
      if (direction === 'left') {
          res.push(matrix[i][j])
          if (j === left) {
              direction = 'up'
              bottom--
              i--
              continue
          } else  {
              j--
          }
      }
      if (direction === 'up') {
        // console.log(i, j)
          res.push(matrix[i][j])
          if (i === top) {
              direction = 'right'
              left++
              j++
              continue
          } else {
              i--
          }
      }
  }
  return res
};


// let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let arr = [[1,2,3],[4,5,6],[7,8,9]]
// let arr = [[1]]

console.log(spiralOrder(arr))