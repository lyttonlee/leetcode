// 990. 等式方程的可满足性
// 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。

// 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。 

 

// 示例 1：

// 输入：["a==b","b!=a"]
// 输出：false
// 解释：如果我们指定，a = 1 且 b = 1，那么可以满足第一个方程，但无法满足第二个方程。没有办法分配变量同时满足这两个方程。
// 示例 2：

// 输出：["b==a","a==b"]
// 输入：true
// 解释：我们可以指定 a = 1 且 b = 1 以满足满足这两个方程。
// 示例 3：

// 输入：["a==b","b==c","a==c"]
// 输出：true
// 示例 4：

// 输入：["a==b","b!=c","c==a"]
// 输出：false
// 示例 5：

// 输入：["c==c","b==d","x!=z"]
// 输出：true
 

// 提示：

// 1 <= equations.length <= 500
// equations[i].length == 4
// equations[i][0] 和 equations[i][3] 是小写字母
// equations[i][1] 要么是 '='，要么是 '!'
// equations[i][2] 是 '='


/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  // let map = new Map()
  // for (let i = 0; i < equations.length; i++) {
  //   let [key1, judg, ,key2] = equations[i]
  //   if (map.has(key1) && map.has(key2)) { // 当两个变量都是存在的时候才有判断的可能
  //     if (judg === '=' && map.get(key1) !== map.get(key2) || judg === '!' && map.get(key1) === map.get(key2)) {
  //       return false
  //     }
  //   } else { // 都不存在或存在一个
  //     if (judg === '!') {
  //       // ..
  //       if (map.has(key1) || map.has(key2)) {
  //         // map.set(key2, map.get(key1))
  //         map.has(key1) ? map.set(key2, key2) : map.set(key1, key1)
  //       }  else { // 都不存在
  //         map.set(key2, key2)
  //         map.set(key1, key1)
  //       }
  //     } else if (judg === '=') {
  //       if (map.has(key1) || map.has(key2)) {
  //         // map.set(key2, map.get(key1))
  //         map.has(key1) ? map.set(key2, map.get(key1)) : map.set(key1, map.get(key2))
  //       }  else { // 都不存在
  //         map.set(key2, key1)
  //         map.set(key1, key2)
  //       }
  //     }

  //   }
  // }
  // return true

  // 并查集
  class UnionFind {
    constructor (len) {
      this.roots = new Array(len).fill(-1)
      this.rank = new Array(len).fill(0)
    }

    union (a, b) {
      let root_a = this.findRoot(a)
      let root_b = this.findRoot(b)
      if (root_a === root_b) return
      if (this.rank[root_a] > this.rank[root_b]) {
        this.roots[root_b] = root_a
      } else {
        this.roots[root_a] = root_b
        if (this.rank[root_a] === this.rank[root_b]) {
          this.rank[root_b]++
        }
      }
    }

    findRoot (x) {
      let x_root = x
      while (this.roots[x_root] !== -1) {
        x_root = this.roots[x_root]
      }
      return x_root
    }
  }
  let roots = new UnionFind(26)
  for (const item of equations) {
    if (item[1] === '=') {
      let [a, b] = [item.charCodeAt(0)-97, item.charCodeAt(3)-97]
      roots.union(a, b)
      console.log(roots)
    }
  }
  for (const item of equations) {
    if (item[1] === '!') {
      let [a, b] = [item.charCodeAt(0)-97, item.charCodeAt(3)-97]
      if (roots.findRoot(a) === roots.findRoot(b)) {
        return false
      }
    }
  }
  return true

  
};

let arr = ["a==b","b!=c","c==a"]
console.log(equationsPossible(arr))