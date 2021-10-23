/**
 * pushes a new element in front of an array
 * @param {Array} array The array to push.
 * @param {*} element Any element.
 * @returns {Array} array New array 
 */
function push(array, element) {
    return [...array, element];
}

module.exports = push;
