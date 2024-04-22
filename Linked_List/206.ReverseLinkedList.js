// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

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
var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];

  console.log(head);
  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};
const head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
// const result = reverseList([1, 2, 3, 4, 5]);
const result = reverseList(head);
console.log(result);

// next---> { val: 2, next: { val: 3, next: null } }
// curr---> { val: 1, next: null }
// prev---> { val: 1, next: null }
// curr---> { val: 2, next: { val: 3, next: null } }
// ------------
// next---> { val: 3, next: null }
// curr---> { val: 2, next: { val: 1, next: null } }
// prev---> { val: 2, next: { val: 1, next: null } }
// curr---> { val: 3, next: null }
// ------------
// next---> null
// curr---> { val: 3, next: { val: 2, next: { val: 1, next: null } } }
// prev---> { val: 3, next: { val: 2, next: { val: 1, next: null } } }
// curr---> null
// ------------
