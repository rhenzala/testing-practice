const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require("../src/functions")

test("capitalize first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("reverses the string", () => {
    expect(reverseString("hello")).toBe("olleh");
})

test("calculator operations", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.multiply(2, 3)).toBe(6);
});

test("caesar cipher shifts correctly", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test("analyzeArray works correctly", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
})
