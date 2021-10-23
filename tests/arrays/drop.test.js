const drop = require('../../source/arrays/drop');

test('default n = 1', () => {
    expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
});

test('value of n > length of an array', () => {
    expect(drop(['a', 'b', 'c', 'd'], 5)).toStrictEqual([]);
});

test('value of n < length of an array', () => {
    expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
});
