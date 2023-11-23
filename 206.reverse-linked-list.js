// 206. Reverse Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var newList = null
  var prev = head
  while(prev) {
    next = prev.next
    prev.next = newList
    newList = prev
    prev = next 
  }
  return newList
};