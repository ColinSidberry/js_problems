"use strict";

/**Takaways:
 * a hashmap is also being used to remember the last time we have seen the char
   so we can determine whether the char repeats.
 */

function lengthOfLongestSubstring(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    const map = new Map(); // Question: map v.s. object?

    while (end < s.length) { // while we are not at the end of the string
        const char = s[end]; // set current char
        if (map.has(char)) { // if we found a repeating char
            start = Math.max(map.get(char), start); // adjust start to the furthest char
        }

        maxLength = Math.max(maxLength, end - start + 1);// becuase we are counting lengths via index position we need to add 1 back to account for the starting value.
        end++;
        map.set(char, end);
    }
    console.log(map);
    return maxLength;
};