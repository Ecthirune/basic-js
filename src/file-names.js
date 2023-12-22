const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  const frequencyMap = new Map();
  const renamedFiles = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (frequencyMap.has(name)) {
      let suffix = frequencyMap.get(name);
      let newName = name + '(' + suffix + ')';
      let count = 1;

      while (frequencyMap.has(newName)) {
        count++;
        suffix = count;
        newName = name+'(' + suffix + ')';
      }

      frequencyMap.set(newName, 1);
      frequencyMap.set(name, count);
      renamedFiles.push(newName);
    } else {
      frequencyMap.set(name, 1);
      renamedFiles.push(name);
    }
  }

  return renamedFiles;
}

module.exports = {
  renameFiles
};
