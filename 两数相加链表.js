/**
 * Definition for singly-linked list.
function ListNode(val) {
   this.val = val;
    this.next = null;
}
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  let node = new ListNode()
  let nextNode = node
  let x,y,sum,carry=0
  while (l1 || l2) {
    x = l1 ? l1.val : 0
    y = l2 ? l2.val : 0
    sum = x + y + carry
    if (sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }
    l1 = l1.next || 0
    l2 = l2.next || 0
    nextNode.next = new ListNode(sum % 10)
    nextNode = nextNode.next
  }
  if (carry === 1) {
    nextNode.next = new ListNode(1)
    nextNode = nextNode.next
  }
  return node.next
};