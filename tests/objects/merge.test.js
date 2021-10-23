const merge = require("../../source/objects/merge")

test(`Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.`, () => {
    expect(merge({a: 3, b: 6},{c: 7, d: 1})).toStrictEqual({ a: 3, b: 6, c: 7, d: 1 });
    expect(merge({a: 3, f: 8},{b: 3, a: 5, c: 7})).toStrictEqual({ a: 5, f: 8, b: 3, c: 7 });
    expect(merge({a: 3, a: 6},{c: 2, d: 4, a: 1})).toStrictEqual({ a: 1, c: 2, d: 4 });
  });