const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) { 
  const hexCharacters = '0123456789ABCDEFabcdef';

  const groups = n.split('-'); 
  if (groups.length !== 6) {
    return false; 
  }
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    if (group.length !== 2) {
      return false; 
    }
    for (let j = 0; j < group.length; j++) {
      const char = group[j];
      if (!hexCharacters.includes(char)) {
        return false; 
      }
    }
  }
  return true; 
}
module.exports = {
  isMAC48Address
};
