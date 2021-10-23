const length = require('../Implemented/length');
const push = require("../Implemented/push");

/**
 * Iterates over elements of collection,
 * returning the first element predicate returns truthy for.
 * The predicate is invoked with three arguments:
 * (value, index|key, collection).
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @returns {*} Returns the matched element, else undefined.
 */

function find(collection, predicate, fromIndex = 0) {
  let res = [];
  for(let i = fromIndex; i < length(collection); i++){
    if(predicate(collection[i], i, collection)){
      res = push(res, collection[i]);
      break;
    }
  }
  return res;
}

module.exports = find;
