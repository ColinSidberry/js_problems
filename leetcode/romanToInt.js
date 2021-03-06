"use strict";

function romanToInt(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    // if we are given an empty string then return 0
    if (s.length < 1) return 0;

    // otherwise initialize your sum to the last value in the string
    let sum = roman[s[s.length - 1]]

    for (let i = s.length - 2; i >= 0; i--) {
        // initialize your pointers based on the hash table values
        const current = roman[s[i]];
        const after = roman[s[i + 1]];

        // because roman numarals normally incease in value as you move from
        // right to left, if you hit a current value that is less than the one
        // coming after it then you have hit the special case where you would 
        // subtract the current value (e.g IV, IX, XL, XC, etc.)
        if (current < after) {
            // special case
            sum = sum - current;
        } else {
            // every other case
            sum = sum + current;
        }
    }
    return sum;
}