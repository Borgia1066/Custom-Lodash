const length = require("../Implemented/length");
const push = require("../Implemented/push")

/**
 * Creates a slice of array with n elements taken from the beginning.
 * @param {Array} array The array to query.
 * @param {number} n The number of elements to take.
 * @returns {Array} Returns the slice of array.
 */
function take(array, n = 1) {
  let res = [];
  if(n > length(array)){
    return array;
  }else
  for(let i = 0; i < n; i++){
    res = push(res, array[i]);
  }
  return res;
}

module.exports = take;
