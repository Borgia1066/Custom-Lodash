const length = require("../Implemented/length");
const push = require("../Implemented/push");

/**
 * Creates an array of values by running each element in collection thru iteratee.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function map(collection, iteratee = (n) => n) {

  let array = collection instanceof Array ? collection : Object.values(collection);
  let result = [];

  for (let i = 0; i < length(array); i++) {
    let value = iteratee(array[i], i, array);
    result = push(result, value);
  }
  return result;
}

module.exports = map;
