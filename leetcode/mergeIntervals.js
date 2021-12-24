"use strict";

/** Instructions:
 * Given an array of intervals where intervals[i] = [starti, endi], 
 * merges all overlapping intervals, 
 * and return an array of the non-overlapping intervals that cover all the 
 * intervals in the input.
 * 
 * Test Cases:
 * Example 1:
    * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    * Output: [[1,6],[8,10],[15,18]]
 * Example 2:
    * Input: intervals = [[1,4],[4,5]]
    * Output: [[1,5]]
 * 
 * Psuedocode:
 * if there is only one interval return that interval
 * assume the first interval is non-overlapping
 * loop through the array of intervals starting from the second
    * if the start of interval 2 is less than the end of interval one
        * add the start of interval 1 to index zero of new array and end of index two to index 1 of new array
    * else 
        * push the non-overlapping interval into the final array
        * and set the current interval to be the non-overlapping interval
 * return the final array 
 */

function merge(intervals) {
    if (intervals.length === 1) return intervals;

    let mergedIntervals = [];
    let nonOverlapping = intervals.shift();

    for (let interval of intervals) { // interval = [15,18]
        if (interval[0] < nonOverlapping[1]) {
            nonOverlapping[1] = interval[1]; // nonOverlapping = [1,6]
        } else {
            mergedIntervals.push(nonOverlapping); // mergedIntervals = [[1,6], [8,10]]
            nonOverlapping = interval; // nonOverlapping = [15,18]
        }
    }
    mergedIntervals.push(nonOverlapping);

    // console.log(mergedIntervals.toString());
    return mergedIntervals;
};

module.exports = {
    merge
};