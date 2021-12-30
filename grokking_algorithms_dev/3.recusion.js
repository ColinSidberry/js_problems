"use strict";

function countDown(start) {
    console.log(start);
    // base case
    if (start === 0) return;
    //recursive case
    return countDown(start - 1);
}

module.exports = {
    countDown
};