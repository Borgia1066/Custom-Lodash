const dropWhile = require('../../source/arrays/dropWhile');

var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

test('test of "dropWhile" function', () => {
    expect(dropWhile(users, function (o) { return !o.active; })).toStrictEqual([{ 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false }]);
});