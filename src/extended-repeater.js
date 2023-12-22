const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let repeatTimes = 1;
  if ( options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  }
  
  let separator = '+';
  if ( options.separator !== undefined) {
    separator = options.separator;
  }
  
  let addition = '';
  if ( options.addition !== undefined) {
    addition = String(options.addition);
  }
  
  let additionRepeatTimes = 1;
  if ( options.additionRepeatTimes !== undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  
  let additionSeparator = '|';
  if ( options.additionSeparator !== undefined) {
    additionSeparator = options.additionSeparator;
  }

  let repeatedStr = '';
  let repeatedAddition = '';

  for (let i = 0; i < repeatTimes; i++) {
    repeatedStr += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatedAddition += addition;

      if (j !== additionRepeatTimes - 1) {
        repeatedAddition += additionSeparator;
      }
    }

    repeatedStr += repeatedAddition;
    repeatedAddition = '';

    if (i !== repeatTimes - 1) {
      repeatedStr += separator;
    }
  }

  return repeatedStr;
}

module.exports = {
  repeater
};


repeater ('la', { repeatTimes: 3 });