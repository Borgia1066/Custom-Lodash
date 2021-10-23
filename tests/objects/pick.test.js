const pick = require("../../source/objects/pick");

test('Creates an object made of picked elements', () => {
    let object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
});