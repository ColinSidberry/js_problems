"use strict";

/** Problem Statement
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 * 
 * Example 3:
 * Input: head = []
 * Output: []
 */

//Definition for singly-linked list.
function ListNode(val=0, next=null) {
    this.val = val;
    this.next = next;
}

// Solution Below --------------------------------------


var reverseList = function (head) {
    let node = head;

    // if there is no node or there is only one node
    if (!node || !node.next) return node; 

    let previousNode = null;
    while (node) {

        // store next node
        let nextNode = node.next;

        // change current node's next to previous node
        node.next = previousNode;

        // move one step, current node becomes previous node
        previousNode = node;

        // next node becomes current node
        node = nextNode;

    }
    return previousNode;
};