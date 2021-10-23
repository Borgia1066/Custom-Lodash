const pickBy = require("../../source/objects/pickBy");

test('should create an object made by pickBy', () => {
  const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  const func = (val) => val > 2;
  expect(pickBy(object, func)).toEqual({ c: 3, d: 4, e: 5 });
});