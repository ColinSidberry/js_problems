"use strict";

/**Takeaways
 * There will always be a number missing. 
 * If we assume that the end is the max and 
 */

const missingNumber = function (nums) {
    const expectedMax = nums.length
    const expectedSum = expectedMax * (expectedMax + 1) / 2;
    const arraySum = nums.reduce((a, b) => a + b, 0)
    console.log("expectedSum=>", expectedSum, " arraySum=>",arraySum);
    return expectedSum - arraySum
};