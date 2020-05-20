var isPalindrome = function(s) {
  let reg = /[^0-9a-zA-Z]/g
  let cur =s.replace(reg, '').toLowerCase()
  // console.log(cur)
  let left = 0, right = cur.length -1
  while(left < right) {
      if (cur[left] === cur[right]) {
          left++
          right--
      } else {
          return false
      }
  }
  return true
};

let s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s))

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindromeListNode = function(head) {
  let node = head
  let list = []
  while (head) {
      list.push(head.val)
      head = head.next
  }

  while(list.length > 0) {
      if (list.pop() === node.val) {
          node = node.next
      } else {
          return false
      }
  }
  return true
};