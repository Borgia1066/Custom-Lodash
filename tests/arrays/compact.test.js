const compact = require('../../source/arrays/compact');

test('compact array [0, 1, false, 2, "", 3]', () => {
    expect(compact([0, 1, false, 2, "", 3])).toStrictEqual([1, 2, 3]);
});