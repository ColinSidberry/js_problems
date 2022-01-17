"use strict";

function ListNode(val, next) { // ?? walk through example
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Iterative-----------------------------------------------------------------
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2 // if list1 doesn't exist, no need to merge and return list2
    if (!list2) return list1 // if list2 doesn't exist, no need to merge and return list1
    const preHead = new ListNode(0)
    let pre = preHead

    while (list1 && list2) { // while both list1 and list2 have value do the following
        if (list1.val <= list2.val) {
            pre.next = list1
            list1 = list1.next
        } else {
            pre.next = list2
            list2 = list2.next
        }

        pre = pre.next
    }

    // becuase the loop only works while both lists have values there will be a
    // remaining amount on the other list when you reach the end of one list.
    // add that here
    pre.next = !list1 ? list2 : list1

    return preHead.next
};
// Recursive-----------------------------------------------------------------
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let head = ListNode();

    if (list1.val < list2.val) {
        console.log("list1.val: ", list1.val);
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2 = list2.next;
    }

    head.next = mergeTwoLists(list1, list2);

    return head;

    // ------Don't understand this but I think above is the same
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
};
// list1 = []
// list2 = [1,]

/**Test Case
 * list1 = [1,->2,4], 
 * list2 = [1,->3,4]
 */