"use strict";

/**Prompt (DSA32)
 * Count the number of unique numbers in an array
*/


function countuniqueValues(arr) {
    if (arr.length === 0) return 0; // if array is empty, no unique values

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) { // if we find unique values. We can do this becuase of the ordering
            i++; // perserve the unique value at index i
            arr[i] = arr[j]; // overwrite the next value with the next unique value
        }
        // if arr[i] and arr[j] are the same, check the next value for j
    }
    // by the time we hit here i+1 will give us the number of unique values in arr
    return i+1;
}

/**Takeaways
 * Writing over the original array to keep track of unique values.
 * i is keeping track of where the unique values are and j is keeping track of the original array.
 *
 * Why must this be sorted?
 * Unsorted example
 * [1,3,2,3]
 * [1,3,2,3]
 * it has to be sorted because that property is what allows us to take advantage
 * of the fact that unique values will be those where the value before doesn't
 * equal the current value.
 */


// it has to be sorted because that property is what allows us to take advantage 
// of the fact that unique values will be those that 