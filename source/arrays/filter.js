const push = require("../Implemented/push");
const length = require("../Implemented/length");

/**
 * Iterates over elements of collection,
 * returning an array of all elements predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function filter(collection, predicate) {
  let res = [];
  for(let i = 0; i < length(collection); i++){
      if(predicate(collection[i], i, collection)){
          res = push(res, collection[i]);
      }
  }
  return res;
}

module.exports = filter;
