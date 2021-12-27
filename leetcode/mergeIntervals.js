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

    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [];

    for (let interval of intervals) {
        if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
        }
    }
    return merged;
};

module.exports = {
    merge
};