function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function reverseString(string) {
    return string.split("").reverse().join("");
}
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
};

function caesarCipher(string, shift) {
    return string.replace(/[a-zA-Z]/g, (char) => {
        const isUpper = char === char.toUpperCase();
        const base = isUpper ? 65: 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    });
}

function analyzeArray(arr) {
    return {
        average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};