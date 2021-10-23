const omitBy = require("../../source/objects/omitBy");

test('should create an object of elements that return true', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    };
    const func = (val) => !(val > 2);
    expect(omitBy(object, func)).toEqual({ a: 1, b: 2});
  });