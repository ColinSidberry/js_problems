"use strict";

var isPalindrome = function (head) {
    let list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }

    for (let i = 0; i < list.length / 2; i++) {
        if (list[i] !== list[list.length - 1 - i]) {
            return false;
        }
    }
    return true;
}