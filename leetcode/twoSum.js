"use strict";

/* Key takeaways: 
 - coverting from array to object to acheive O(1) lookup time
 - This is a hash problem because to get an optimal solution we need some 
 way of looping through once but remember what we previously saw and accessing 
 it in constant time
*/
var twoSum = function(nums, target) {
    const pairs = {}; // to hold the potential pairs
    for(let i = 0; i < nums.length; i++){
        const dif = target - nums[i]; 
        
        // has the pair to your existing item has already been captured.         
        if(pairs[dif] !== undefined){
            return [i, pairs[dif]] // return the indexes that satisfy the target condition
        }
        // if not, add the current value/index combo to the pairs object
        pairs[nums[i]] = i; 
    } 
};