/**
 * @param {number[][]} grid
 * @return {number}
 */
// 深度优化
var islandPerimeter = function(grid) {
  let perimeter = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) { // 岛屿
        dfs(row, col)
      }
    }
  }
  function dfs (row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] ===  0) { // 越界或者是水域
      // return 1
      perimeter++
      return
    } else if (grid[row][col] === 2) {
      return
    } else {
      grid[row][col] = 2
      dfs(row-1, col)
      dfs(row+1, col)
      dfs(row, col-1)
      dfs(row, col+1)
    }
  }
  return perimeter
};
let g = [[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]]
console.log(islandPerimeter(g))