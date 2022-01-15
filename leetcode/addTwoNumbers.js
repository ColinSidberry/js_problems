"use strict";

// Testcases
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    const result = new ListNode();
    let pointer = null;

    // if either l1 or l2 has values, execute the following
    while(l1 || l2){
        pointer = (pointer == null) ? result : pointer.next;

        const sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry;
        if(sum >= 10) {
            pointer.val = ((sum % 10));
            carry = 1;
        } else {
            pointer.val = (sum);
            carry = 0;
        }
        
        l1 = (l1 && l1.next) || null;
        l2 = (l2 && l2.next) || null;
        
        if(l1 || l2)
            pointer.next = new ListNode();
        else if(carry)
            pointer.next = new ListNode(carry);
        else
            pointer.next = null;
    }
    
    return result;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}