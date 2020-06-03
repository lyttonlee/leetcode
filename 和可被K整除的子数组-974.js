// 974. 和可被 K 整除的子数组
// 给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。

 

// 示例：

// 输入：A = [4,5,0,-2,-3,1], K = 5
// 输出：7
// 解释：
// 有 7 个子数组满足其元素之和可被 K = 5 整除：
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 

// 提示：

// 1 <= A.length <= 30000
// -10000 <= A[i] <= 10000
// 2 <= K <= 10000

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  // 前缀和 同余定理
  let map = {0: 1}
  let preSum = 0, count = 0
  for (let i = 0; i < A.length; i++) {
    preSum = (preSum + A[i]) % K
    if (preSum < 0) preSum += K
    if (map[preSum]) {
      count += map[preSum]
      map[preSum] += 1
    } else {
      map[preSum] = 1
    }
  }
  return count
};

let arr = [1, 2,3,6,-2, 45,23,12,6,7]
let k = 3

console.log(subarraysDivByK(arr, k))


// 一看到“子数组和”，有必要马上想到“前缀和”
// √ 复习，什么是“前缀和”？
// 数组 第 0 项 到 当前项 的 总和
// 如果用一个数组 preSum 表示：
// preSum[0]：数组A 第 0 项 到 第 0 项 的总和
// preSum[1]：数组A 第 0 项 到 第 1 项 的总和
// preSum[2]：数组A 第 0 项 到 第 2 项 的总和
// preSum[3]：数组A 第 0 项 到 第 3 项 的总和
// ……
// preSum[i] = A[0] + A[1] +…+A[i]
// preSum[i]=A[0]+A[1]+…+A[i]

// 数组某项，可以表示为相邻前缀和之差：
// A[i] = preSum[i] - preSum[i - 1]
// A[i]=preSum[i]−preSum[i−1]

// 多项叠加，等号右边加减相消：
// A[i] +…+A[j]=preSum[j] - preSum[i - 1]
// A[i]+…+A[j]=preSum[j]−preSum[i−1]

// i 当然可以为 0，此时 i - 1 为 - 1，我们故意让 preSum[-1]preSum[−1] 为 0，此时：
// A[0] +A[1]+…+A[j]=preSum[j]
// A[0]+A[1]+…+A[j]=preSum[j]

// 这么做是为了让边界情况也能套用通式
// 题目等价转化，目标更清晰
// 子数组的元素之和，就是，数组 第 ii 项 到 第 jj 项 的和

// 元素之和能被 K 整除的子数组数目 就是 有几种 i、j 组合，使得 第 i ~ j 项的和 mod K == 0

// ↓ ↓ ↓ 转化为 ↓ ↓ ↓

// 有几种 i、ji、j 组合，满足 (preSum[ j ] - preSum[ i - 1 ])mod K== 0(preSum[j]−preSum[i−1])modK==0

// 有几种 i、ji、j 组合，满足 preSum[j] mod K == preSum[i-1] mod KpreSum[j]modK==preSum[i−1]modK

// 前提： preSum[j]preSum[j] 、preSum[i-1]preSum[i−1] 为正整数，负数的情况要处理
// preSum 数组的每一项怎么求？
// 当前项的前缀和，是前一项的前缀和，累加当前项而得
// 求出的 preSum 数组项，让它 mod K，mod 完再看哪两项相等，计数
// 但通式有 i、ji、j 两个变量，找出所有相等的两项，需要两层循环分别遍历 i,ji,j
// 明确我们关心的是什么：数值 和 频次
// 前缀和 与 数组 A 的项一一对应，但我们不关心它具体对应到哪一项
// 我们只关心出现过哪些 前缀和 数值，和对应的 出现次数
// 用一个变量 preSum ，保存每次求出的 前缀和 mod K，存入哈希表
// 存键值对：
// key：前缀和 mod K 。数值 作为 key
// value：这个结果值出现了几次
// 前缀和 mod K 的值正好是 0,1,2...,K-10,1,2...,K−1，恰似索引，所以也可以用数组存，代码见最后
// 流程简述
// 预置 preSum[-1] = 0 ：即遍历数组 A 之前，map 提前放入 0:1，代表求第 0 项前缀和之前，前缀和 mod K 等于 0 已经出现了 1 次
// 遍历数组 A 的每一项，求当前项的 前缀和 mod K ，存入 map 中
// 之前没有存过，则作为 key 存入，值为 1
// 之前存过，则对应值 +1
// 边存边查看 map ，如果 map 中已存在 key 为 当前前缀和 mod K
// 说明存在【之前求过的前缀和】，它 mod K == 当前前缀和 mod K
// 把满足条件的 key 对应的出现次数，累加给 count
// 一句话概括
// 根据 当前前缀和 mod K，在哈希表中找到与之 相等 的 key 。满足条件的 历史前缀和 可能出现过 n 次。即，当前前缀和 找到 n 个历史前缀和与它搭配，分别形成 n 个不同的子数组，子数组的元素和能被 K 整除。
// 遍历数组 A 每一项，重复以上步骤， n 不断累加给 count，最后返回 count
// 时间复杂度、空间复杂度
// Time：O(n)
// Space：O(K)。 mod 的结果最多 K 种，哈希表最多存放 K 个键值对


// 补充：前缀和 为负数 的情况
// 举例：K = 4，求得一个前缀为 -1 ， -1 % 4 = -1 ，3 % 4 = 3
// 看似 mod 的结果不相等，一个为 -1 ， 一个为 3 ，但它们应该记到一组
// 因为它们前缀和之差：3 - (-1) 为 4 。 4 % 4 = 0
// 所以要把 前缀和 -1，加上 K ，转成正数的 3

// 作者：hyj8
// 链接：https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/solution/you-jian-qian-zhui-he-na-jiu-zai-ci-dai-ni-da-tong/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。