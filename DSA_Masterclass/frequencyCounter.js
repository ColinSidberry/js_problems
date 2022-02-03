"use strict";

/**Problem write a function that will count the frequency */
function counter(arr){
    let freq = {};
    for (let i = 0; i< arr.length; i++){
        freq[i] = (freq[i] || 0) + 1;
    }
    return freq;
}