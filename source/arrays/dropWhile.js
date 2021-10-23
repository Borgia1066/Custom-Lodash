const length = require("../Implemented/length");
const push = require("../Implemented/push");

/**
 * Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 * @param {Array} array  array to query.
 * @param {Function} predicate function invoked per iteration
 * @returns {Array} Returns the slice of array.
 */

function dropWhile(array, predicate) {
  let index = 0;
  let res = [];
  for(let i = 0; i < length(array); i++){
    if(!predicate(array[i], i, array)){
      index = i;
      break;
    }
  }
  
  if(index === 0){
    return [];
  }else
  for(let j = 0; j < index; j++){
    res = push(res, array[j]);
  }
  return res;

}

module.exports = dropWhile;
