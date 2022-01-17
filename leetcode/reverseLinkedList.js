"use strict";

[1,2,3,4,5]

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