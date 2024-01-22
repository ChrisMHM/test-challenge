const calculator = {
    add(a, b) {
        return a + b;
    },
    substract(a, b) {
        return a - b;
    },
    mult(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    },
    power: (a, b) => a ** b,
}

module.exports = calculator; // Exportar una función, variable o clase