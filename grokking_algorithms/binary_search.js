"use strict";

function binarySearch(arr, val) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === val) return mid;

        if (arr[mid] > val) {
            high = mid - 1;
        }

        if (arr[mid] < val) {
            low = mid + 1;
        }
    }
    return null;
}