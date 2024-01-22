const fizzBuzz = require('../fizzBuzz');

describe('FizzBuzz function test', () => {
    it('Should get Fizz when number its divisible by 3', () => {
        for (let number = 0; number < 61; number += 3) {
            if (!(number % 5 === 0)) {
                expect(fizzBuzz(number)).toBe('Fizz');
            }
        }
    })

    it('Should get Buzz when number its divisible by 5', () => {
        for (let number = 0; number < 61; number += 5) {
            if (!(number % 3 === 0)) {
                expect(fizzBuzz(number)).toBe('Buzz');
            }
        }
    })

    it('Should get Fizz when number its divisible by 3 and 5', () => {
        for (let number = 0; number < 61; number += 15) {
            expect(fizzBuzz(number)).toBe('FizzBuzz');
        }
    })
});