"use strict";

/*Problem:
Given Two arrays, determine if the second array is equal to the first aaray with its values squared.*/

/*Test Cases:
1. [1,2,3] and [1,4,9] -> True
2. [1,2]   and [1,4,9] -> False // if arr.length isn't the same
3. [1,2,3] and [1,2,9] -> False // if values are the same squared
4. []      and []      -> True
*/

/**Psuedocode:
 * fail fast -> return false if the arr lengths aren't the same
 * deternine if the arr's are the same square by looping through
    * if arr1[i]**2 !== arr2[i] return false
* return true if you make it through that unscathed
 */
function isSameSquared(arr1, arr2) {
    // Add to me when time allows
}


