/*Psuedocode
 * create wierd string
 * loop through the string
  * if char is a ""
    * add empty string
  * if index is even 
    * add upp case to final str
  * if index is odd
    * add lower case to final str
  * increment index
*/

function toWeirdCase(string) {
  let weirdStr = "";
  let words = string.split(" ");
  console.debug({ words });

  for (let j = 0; j < words.length; j++) {
    let i = 0;

    for (let char of words[j]) {
      console.debug({ char }, { i }, "i%2: ", i % 2);
      if (i % 2 === 0) {
        weirdStr += char.toUpperCase();
      } else {
        weirdStr += char.toLowerCase();
      }
      i++;
    }

    if (j !== words.length - 1) {
      weirdStr += " ";
    }
  }

  console.log({ weirdStr });
  return weirdStr;
}

module.exports = {
  toWeirdCase
};