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

/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
function quicksort(array) {
  // base case, arrays with 0 or 1 element are already "sorted"
  if (array.length < 2) return array;
  // recursive case
  let pivot = array[0];
  // sub-array of all the elements less than the pivot
  let less = array.slice(1).filter((el) => el <= pivot);
  console.debug({less});
  // sub-array of all the elements greater than the pivot
  let greater = array.slice(1).filter((el) => el > pivot);
  console.debug({greater});
  return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]


module.exports = {
    recursiveSum,
    recursiveMax,
    quicksort
};