/**
  * The opposite of `_.pickBy`; this method creates an object composed of
  * the own and inherited enumerable string keyed properties of `object` that
  * `predicate` doesn't return truthy for. The predicate is invoked with two
  * arguments: (value, key).
  * 
  * @param {Object} object The source object.
  * @param {Function} [predicate=_.identity] The function invoked per property.
  * @returns {Object} Returns the new object.
  * 
  */
 
 function omitBy(obj, func) {
    const target = {};
    for (const key in obj) {
        if (func(obj[key])) {
            target[key] = obj[key];
        }
    }
    return target;
}

module.exports = omitBy;