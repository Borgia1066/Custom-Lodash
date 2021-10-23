const length = require("../Implemented/length");
const push = require("../Implemented/push");

/**
 * Creates a slice of array with n elements dropped from the beginning.
 * @param {Array} array to be changed
 * @param {number} n number of elements we have to drop
 * @returns {Array} the array without dropped elements
 */

function drop(array, n = 1) {
  let res = [];
  for(let i = n; i < length(array); i++){
    res = push(res, array[i]);
  }
  return res;
}

module.exports = drop;
