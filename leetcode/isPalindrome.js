"use strict";

// psuedocode
// convert to string
// run loop until Math.floor(length/2)
// if left end !== right end return false
// if made it through the loop return true
var isPalindrome = function(x) {
    strX = x.toString();
    let end = strX.length - 1;
    let middle = Math.floor(strX.length/2);
    
    for(let i = 0; i < middle; i++) {
        if (strX[i] !== strX[end - i]) return false;
    }
    return true;
};