/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let isLandNum = 0
  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col] === 1) {
              isLandNum++
              dfs(row, col)
          }
      }
  }
  function dfs (row, col) {
      if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === 0) {
          console.log('return')
          return
      } else {
          grid[row][col] = 0
          dfs(row-1, col)
          dfs(row+1, col)
          dfs(row, col-1)
          dfs(row, col+1)
      }
  }
  return isLandNum
};
let g =[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

console.log(numIslands())