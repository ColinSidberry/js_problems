"use strict";

/**Prompt: (From DSA30)
 * Write a function called sum zero, which accepts assorted array of integers.The function should
 * find the first pair where the sum is zero. If a pair isn't found return undefined.
 */


function sumZero(arr){
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]];
        }

        if (sum > 0){ // if it's greater than zero, then the positive is too high and needs to come down
           right --; 
        } else { // if its less than zero, then the negative is too low
            left ++;
        }
    }
}

/**Takeaway:
 * This is able to get down to an O(n) time because we are able to leverage the 
 * fact that some must be positive and some must negative and our algo can move 
 * up and down accordingly in a orderly fashion because the data is sorted.
 * 
 * If it wasn't sorted we wouldn't necessarily be able to rely on the fact our
 * sum being greater than zero meaning that our right pointer is too high or
 * our sum being less than zero meaning that our left pointer is too low.
 */