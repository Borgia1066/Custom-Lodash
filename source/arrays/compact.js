const length = require("../Implemented/length");
const push = require("../Implemented/push");

/**
 * Creates an array with all falsey values removed.
 * @param {Array} array the array to clean
 * @returns {Array} filtered array without falsy values
 */


function compact(array) {
   let res = [];
   for(let i = 0; i < length(array); i++){
       if(array[i]){
           res = push(res, array[i]);
       }
   }
   return res;
}

module.exports = compact;
