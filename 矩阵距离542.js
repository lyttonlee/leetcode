/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  let targetMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    targetMatrix[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        targetMatrix[i][j] = 0
      } else {
        computeStep(i, j)
      }
    }
  }
  function computeStep (i, j, step) {
    // let step = 0
    console.log(i, j)
    if (matrix[i][j] === 0) {
      console.log(step)
      return step
    } else {
      while (i > 0 && i < matrix.length - 1 && j > 0 && j < matrix[i].length - 1 ) {
        step++
        console.log(step)
        computeStep(i-1, j)
        computeStep(i+1, j)
        computeStep(i, j-1)
        computeStep(i, j+1)
      }
    }
  }
  return targetMatrix
}

let matrix = [[0,1,1,1], [1,0,0,1], [1,1,1,1]]
// console.log(updateMatrix(matrix))
console.log(Date.now())