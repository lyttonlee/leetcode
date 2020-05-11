var maxAreaOfIsland = function(grid) {
  let maxArea = 0
  for(let row = 0; row< grid.length; row++) {
      for(let col = 0; col<grid[row].length; col++) {
          if (grid[row][col] === 1) {
              let islandArea = 0
              let curArea = dfs(row, col, islandArea)
              console.log(curArea)
              maxArea = Math.max(maxArea, curArea)
              // console.log(maxArea)
          }
      }
  }
  function dfs (row, col, area) {
    let curArea = area
      if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === 0) {
          return 0 + curArea
      } else {
          // console.log(area)
          grid[row][col] = 0
          // area++
          curArea++
          console.log(curArea)
          curArea = dfs(row-1, col, curArea)
          curArea = dfs(row+1, col, curArea)
          curArea = dfs(row, col-1, curArea)
          curArea = dfs(row, col+1, curArea)
          console.log(curArea)
      }
      return curArea
  }
  return maxArea
};

let grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]

console.log(maxAreaOfIsland(grid))