const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('substracts a - b', () => {
    expect(calculator.substract(1, 2)).toBe(-1);
})

test('multiplies a * b', () => {
    expect(calculator.mult(1, 2)).toBe(2);
})

test('divides a / b', () => {
    // Consider decimals
    expect(calculator.divide(1, 2)).toBe(0.5);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(2, 2)).toBe(4);
})

