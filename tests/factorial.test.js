const factorial = require('../factorial');

describe('Factorial using recursion', () => {
    it('Should get 1 for factorial of 0', () => {
        expect(factorial(0)).toBe(1);
    })

    it('Should get 1 for factorial of 1', () => {
        expect(factorial(1)).toBe(1);
    })

    it('Should get 120 for factorial of 5', () => {
        expect(factorial(5)).toBe(120);
    })

    it('Should get 3628800 for factorial of 10', () => {
        expect(factorial(10)).toBe(3628800);
    })
});