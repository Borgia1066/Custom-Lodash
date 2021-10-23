/**
   * Creates an object composed of the `object` properties `predicate` returns
   * truthy for. The predicate is invoked with two arguments: (value, key).
   *
   * @param {Object} object The source object.
   * @param {Function} [predicate=_.identity] The function invoked per property.
   * @returns {Object} Returns the new object.
   */

 function pickBy(obj, func) {
  const target = {};
  
  for (const key in obj) {
    if (func(obj[key])) {
      target[key] = obj[key];
    }
  }
  return target;
}
  
  module.exports = pickBy;