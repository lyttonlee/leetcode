// 146. LRU缓存机制
// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

// 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

 

// 进阶:

// 你是否可以在 O(1) 时间复杂度内完成这两种操作？

 

// 示例:

// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4




// hashMap  双向链表
//  hashmap {key: value}
//  listNode node(key) 存放对应的key
/**
 * @param {number} capacity
 */

var LRUCache = function(capacity) {
  this.cache = {}
  this.maxLen =capacity
  this.length = 0
  this.listNode = new ListNode()
};

const Node = function (key) {
  this.key = key
  this.next = null
  this.prev = null
}


const ListNode = function () {
  this.head = null
  this.tail = null
  this.head.next = this.tail
  this.tail.prev = this.head
}

ListNode.prototype.append = function (key) {
  let temp = this.tail.prev
  let node = new Node(key)
  temp.next = node
  node.prev = temp
  node.next = this.tail
  this.tail.prev = node
}
// 删除最前面一个node
ListNode.prototype.deleteNode = function () {
  let temp = this.head.next
  let temp2 = temp.next
  this.head.next = temp2
  temp2.prev = this.head
  return temp.key
}
ListNode.prototype.deleteNodeByKey = function (key) {
  
}
// 移动key到末尾
ListNode.prototype.moveToEnd = function (key) {
  this.deleteNodeByKey(key)
  this.append(key)
}

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.cache[key]) {
    // 将key这个节点移动到双向链表
    this.listNode.moveToEnd(key)
    return this.cache[key]
  } else {
    return -1
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.cache[key]) { // 有这个缓存，更新缓存并移动到末尾(最新使用的有效缓存)
    this.cache[key] = value
    this.listNode.moveToEnd(key)
  } else {
    if (this.length < this.maxLen) { // 缓存未达到上线，添加缓存到末尾
      this.cache[key] = value
      this.length++
      this.listNode.append(key)
    } else { // 达到上限删除无用缓存，最前面的一个，然后添加缓存
      let deleteKey = this.listNode.deleteNode()
      delete this.cache[deleteKey]
      this.cache[key] = value
      this.listNode.append(key)
    }
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/