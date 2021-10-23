const length = require("../Implemented/length");

/**
 * Checks if value is in array.
 * If array is a string, it's checked for a substring of value,
 * otherwise SameValueZero is used for equality comparisons.
 * If fromIndex is negative, it's used as the offset from the end of array.
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {boolean} Returns true if value is found, else false.
 */
function includes(array, value, fromIndex = 0) {
  for(let i = fromIndex; i < length(array); i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}

module.exports = includes;
