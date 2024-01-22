const factorial = (numero) => {
    if (numero === 1 || numero === 0) {
        return 1;
    }

    return numero * factorial(numero - 1);
};

module.exports = factorial;