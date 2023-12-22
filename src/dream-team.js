const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array))
  {
  return false;
  } 
  
  let letters=[];
  for (let i = 0; i< members.length; i++){
    if (typeof members[i] === 'string'){
    letters += members[i].trim().charAt(0).toUpperCase();
    }
  }

  if (letters.length>0){
  letters = letters.split('').sort().join('');  }
  
  return letters;
}

module.exports = {
  createDreamTeam
};