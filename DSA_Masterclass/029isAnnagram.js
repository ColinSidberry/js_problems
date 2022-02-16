"use strict";
/**Problem 
 * write a function that takes in two strings and determines if they are annagrams of each other.
*/

/**Test Cases:
 * 1. ''    ,''    -> True
 * 2. 'aaz' ,'zza' -> False
 * 3. 'cinema', 'iceman' -> True
 */

/**Psuedocode 
 * if the string length is not the same return false
 * loop through both strings and build a frequency count of each
 * loop through the frequency counts
    * if the number of times a letter from one freq !== the number of times it appears in another frequency 
        *  return false;
* made it through all that unscathed, return true
*/

function isAnnagram(str1, str2){
    if (str1.length !== str2.length) return false;

    let str1Freq = {};
    let str2Freq = {};

    // Build frequencies
    for (let i = 0; i< str1.length; i++){
        str1Freq[str1[i]] = (str1Freq[str1[i]] || 0) + 1;
        str2Freq[str2[i]] = (str2Freq[str2[i]] || 0) + 1;
    }

    for (let key in str1Freq) {
        if (str1Freq[key] !== str2Freq[key]) return false;
    }
    return true;
}