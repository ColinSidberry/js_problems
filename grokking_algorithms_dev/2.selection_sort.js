"use strict";

//Problem: find the smallest item in an arr
// Notes:
// assume that the first item is the smallest and assign it and the index as such
// loop through the arr starting at position 1
// if that item is smaller adjust smallest item
// mutate the arr so that the smallest item is removed
// return the smallest item 

// loop through the arr
// run the find smallest item function for the length of the arr adding the smallest item to a new arr
// return sorted array

function findSmallest(arr) {
    let smallest = arr[0];
    let smallestI = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestI = i;
        }
    }

    arr.splice(smallestI, 1);
    return smallest
}

function selectionSort(unsorted) {
    let sorted = [];

    for (let i = 0; i < unsorted.length; i++) {
        sorted.push(findSmallest(unsorted));
    }

    return sorted;
}