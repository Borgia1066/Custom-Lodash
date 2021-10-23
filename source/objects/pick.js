/**
  * Creates an object composed of the picked `object` properties.
  * @param {Object} object The source object.
  * @param {...(string|string[])} [paths] The property paths to pick.
  * @returns {Object} Returns the new object.
  */


 function pick(object, paths) {
    const obj = {};
    for (const prop in object) {
        for (const key of paths) {
            if (key === prop) {
                obj[prop] = object[prop]
            }
        }
    }
    return obj;
}

module.exports = pick;