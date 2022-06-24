module.exports = function reverse(n) {
    const abs = Math.abs(n);
    const value = String(abs).split("").reverse().join("");
    return Number(value);
};
