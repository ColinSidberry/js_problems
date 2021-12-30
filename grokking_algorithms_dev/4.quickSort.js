"use strict";

function recursiveSum(toBeSummed, sum = 0) {
    if (toBeSummed.length === 0) return sum;

    sum += toBeSummed.pop(); // starting from the end to be more performant
    return recursiveSum(toBeSummed, sum);
}

function recursiveMax(nums, max = 0) {
    if (nums.length === 0) return max;

    max = Math.max(max, nums.pop());
    return recursiveMax(nums, max);
}

module.exports = {
    recursiveSum,
    recursiveMax
};