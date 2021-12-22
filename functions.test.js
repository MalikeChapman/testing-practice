
const {capitalize, reverseString, calculator, caesarCipher} = require('./functions');

test('First Letter Capitalized', () => {
    expect(capitalize("test")).toBe("Test");
});
test('First Letter Capitalized', () => {
    expect(capitalize("asher")).toBe("Asher");
});
test('First Letter Capitalized', () => {
    expect(capitalize("a")).toBe("A");
});

test('Null entry is null', () =>{
    let n = null;
    expect(capitalize(n)).toBeNull();

});
test('Empty String', () => {
    expect(capitalize("")).toBe("");
})

test('Empty reverseString', () => {
    expect(reverseString("")).toBe("");
})
test('null reverseString', () => {
    const n = null;
    expect(reverseString(n)).toBeNull();
})
test('Length 1 reverseString', () => {
    expect(reverseString("a")).toBe("a");
})
test('regular reverseString', () => {
    expect(reverseString("test")).toBe("tset");
})
test('long reverseString', () => {
    expect(reverseString("abcdefg")).toBe("gfedcba");
})
test('long space reverseString', () => {
    expect(reverseString("abc defg")).toBe("gfed cba");
})

test('testing object', () =>{
    expect(calculator(2, 2)).toMatchObject({add : 4, subtract: 0, multiply: 4, divide: 1});
})