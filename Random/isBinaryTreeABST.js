"use strict";

/*FIXME: Running into the depth issue where this returns true if the root is 4 
but a grandchild on the left is 5 (which is invalid) */

// takes in a binary tree
// if binary search tree => true
// if not false

// test----------
// node = {
// left: {left:null, right: null, val: 1}
// right: {left: null, right: null, val: 3}
// val: 2
// } ==> true

// node = {
// left: {left:null, right: null, val: 3}
// right: {left: null, right: null, val: 0}
// val: 2
// } ==> false

// if node !exist return false;
// if node.left !== null 
// if node.left.val < node.val
// function(node.left)
// return false

// if node.right !== null 
// if node.right.val > node.val
// function(node.left)
// return false;

function isBST(root) {
    let current = root;
    if (current.left !== null) {
        if (current.left.val < current.val) {
            return isBST(current.left);
        }
        return false;
    } 

    if (current.right !== null) {
        if (current.right.val > current.val) {
            return isBST(current.right);
        }
        return false;
    } 
}