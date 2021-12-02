/** product: calculate the product of an array of numbers. */

function product(nums) {
  //Base Case
  if (nums.length === 0) return 1;

  //Recursive Case
  let first = nums.shift();
  return first * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar; // stop if we are at the end of the list of words.
  longestSoFar = Math.max(words[idx].length, longestSoFar); // is the current word the longest or is what we had before the longest
  return longest(words, idx + 1, longestSoFar); // do the same thing for the next index and the updated accumulator
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, output = "") {
  // base when we reach the end of the string
  if (i === str.length) return output;

  if (i % 2 === 0) {
    output += str[i];
  }

  return everyOther(str, i + 1, output);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length - 1) {
  // 1st base case: stops when left is greater than right
  if (left >= right) return true; // make sure you get this
  // 2nd base case: stops when we don't have a palindrome
  if (str[left] !== str[right]) return false;

  // otherwise: keep checking the next index
  return isPalindrome(str, left + 1, right - 1,)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // 1st base: are we at the end of the array?
  if (i === arr.length) return -1;
  // 2nd base: is this the val we are looking for?
  if (arr[i] === val) return i;

  // otherwise: move to the next index and check the same thing
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, answer = "") {
  // base: we are at the end of the first str
  if (i < 0) return answer;

  //otherwise: adjust answer and go left to the next index.
  answer += str[i];
  return revString(str, i - 1, answer);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i = 0, accumulator = []) {
  // base: return accumulator at the end of the loop
  for (let key in obj) {
    // other check if value is object or string and call function or adjust accumulator accordingly
    if (typeof (obj[key]) === 'object') {
      gatherStrings(obj[key], i, accumulator);
    } else {
      if (typeof (obj[key]) === 'string') {
        accumulator.push(obj[key]);
      }
    }
  }
  return accumulator;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, lowerLimit = 0, upperLimit = arr.length - 1) {
  // base: exit when lowerLimit > upperLimit
  if (lowerLimit > upperLimit) return -1;

  // otherwise
  let mid = Math.floor((upperLimit + lowerLimit) / 2);

  if (arr[mid] === val) return mid;

  if (arr[mid] > val) {
    upperLimit = mid - 1;
    return binarySearch(arr, val, lowerLimit, upperLimit);
  }

  if (arr[mid] < val) {
    lowerLimit = mid + 1;
    return binarySearch(arr, val, lowerLimit, upperLimit);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
