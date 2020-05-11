/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let oldColor = image[sr][sc]
  if (oldColor === newColor) {
    return image
  }
  bfs(sr,sc)
  function bfs (sr,sc) {
      if (isInImage(sr,sc) && image[sr][sc] === oldColor) {
          image[sr][sc] = newColor
          bfs(sr-1, sc)
          bfs(sr+1,sc)
          bfs(sr,sc-1)
          bfs(sr,sc+1)
      } else {
          return
      }
  }
  function isInImage (sr, sc) {
      if (sr>=0&&sr<image.length&&sc>=0&&sc<image[sr].length) {
          return true
      } else {
          return false
      }
  }
  return image
};
let image = [[0,0,0],[0,1,1]]
console.log(floodFill(image, 1, 1, 1))