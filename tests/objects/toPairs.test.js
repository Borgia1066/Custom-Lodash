const toPairs = require("../../source/objects/toPairs");

test('return entries', () => {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }
    expect(toPairs(new Foo)).toStrictEqual( [['a', 1], ['b', 2]]);
});
