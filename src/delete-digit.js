const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let someStr = n.toString();
  let maxNumber = -Infinity;
  console.log('start number: ', n);
  for (let i = 0; i < someStr.length; i++) {
    let newNumStr = someStr.slice(0, i) + someStr.slice(i + 1);
    let newNum = parseInt(newNumStr);
    maxNumber = Math.max(maxNumber, newNum);
  }
  console.log('return number: ', maxNumber);
  return maxNumber;
}

module.exports = {
  deleteDigit
};
