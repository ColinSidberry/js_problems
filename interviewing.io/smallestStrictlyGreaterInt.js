"use strict"

/**Instructions:
 * You are given a string of digits, representing an integer, e.g. "1112"
 * You need to output the smallest integer that is strictly greater than the 
 * given integer, but uses the same set of digits.
 * 
 * Test Cases:
 * - "1112" ==> "1121"
 * - "1312" ==> "1321"
 * 
 * - "1132" ==> "1213"
 * - "1432" ==> "2134"
 * 
 * - "11"   ==> ""
 * - "1000" ==> ""
 * 
 * Pseudocode:
 *  loop through the num str
 * start with the last and second to last digits to see if the last is greater.
   if not compared the last and next digit to the left.
   once a digit is found that make that equality true, order the digit to the right and add them to the returning string
 
 edgecases
 if the last digit is not greater than any other digit
 return an empty string
 */

function smallestStrictlyGreaterInt(numStr) { //"1432"
    let finalNumStr = "";
    let lastNum = numStr[numStr.length - 1]; //"2"

    for (let i = numStr.length - 2; i >= 0; i--) {
        let compareNum = numStr[i];

        if (lastNum > compareNum) {
            numStr[numStr.length - 1] = compareNum;
            numStr[i] = lastNum;

            let restOfNumStr = numStr.slice(i + 1).sort();

            finalNumStr = numStr.slice(0, i) + restOfNumStr;

            break;
        }
    }

    console.log(finalNumStr);
    return finalNumStr;
}

module.exports = {
    smallestStrictlyGreaterInt
};