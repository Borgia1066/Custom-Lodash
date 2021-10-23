const length = require("../Implemented/length");
const push = require("../Implemented/push");

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @param {Array} array The array
 * @param {number} size The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 */

function chunk(array, size = 1) {
  if (length(array) === 0) {
    return [];
  }else{
    let result = [], innerArr = [], outIndex = 0;
  for (let i = 0; i < length(array); i++) {
    let index = i % size;
    innerArr[index] = array[i];
    if (index === size - 1 || i === length(array) - 1) {
      result = push(result, innerArr);
      innerArr = [];
      outIndex++;
    }
  }
  return result;
  }
}

module.exports = chunk;
