/**
 * returns the length of an array
 * @param {Array} array
 * @returns {number}
 */

function length(array) {
  let l = 0;
  while(array[l] !== undefined){
    l++;
  }
  return l;
}

module.exports = length;
