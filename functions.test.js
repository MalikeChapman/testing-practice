
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