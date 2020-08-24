import { MathHelper } from './math-helper';

describe('MathHelper', () => {
    const _sut = new MathHelper(); 

    describe('getMultiplesOfNumberBelowMax', () => {
        it('should return a list of the multiples of the number below the max parameter', () => {
            const result = _sut.getMultiplesOfNumberBelowMax(3, 10);
            expect(result).toEqual([3, 6, 9]);
        });
    });

    describe('generateFibonacciSequenceUpToAndIncludingMax', () => {
        it('should return a list of the first Fibonacci numbers which are not higher than the max parameter', () => {
            const result = _sut.generateFibonacciSequenceUpToAndIncludingMax(22);
            expect(result).toEqual([1, 2, 3, 5, 8, 13, 21]);
        });
    });

    describe('getListOfPrimeFactors', () => {
        it('should return a list of the prime factors, not neccesarily all unique', () => {
            const result = _sut.getListOfPrimeFactors(90);
            expect(result).toEqual([2, 3, 3, 5]);

            const result2 = _sut.getListOfPrimeFactors(13195);
            expect(result2).toEqual([5, 7, 13, 29]);
        });
    });

    describe('getPrimeFactorization', () => {
        it('should the prime factorization of the number', () => {
            const result = _sut.getPrimeFactorization(90);
            expect(result.has(2)).toBeTrue;
            expect(result.has(3)).toBeTrue;
            expect(result.has(5)).toBeTrue;
            expect(result.has(7)).toBeFalse();

            expect(result.get(2)).toBe(1);
            expect(result.get(3)).toBe(2);
            expect(result.get(5)).toBe(1);
        });
    });

    describe('isPalindromeNumber', () => {
        it('should true if the number is a palindrome', () => {
            const result = _sut.isPalindromeNumber(9009);
            expect(result).toBe(true);
        });

        it('should false if the number is not a palindrome', () => {
            const result = _sut.isPalindromeNumber(9109);
            expect(result).toBe(false);
        });
    });

    describe('getNthPrime', () => {
        it('should return the nth prime', () => {
            expect(_sut.getNthPrime(6)).toBe(13);
        });
    });

    describe('_isPrime', () => {
        it('should return true if the number is 2', () => {
            expect(_sut._isPrime(2)).toBeTrue();
        });

        it('should return true if the number is 3', () => {
            expect(_sut._isPrime(3)).toBeTrue();
        });

        it('should return true if the number is 5', () => {
            expect(_sut._isPrime(5)).toBeTrue();
        });

        it('should return false if the number is not a prime', () => {
            expect(_sut._isPrime(4)).toBeFalse();
        });
    });

    describe('_isPythagoreanTriplet', () => {
        it('should return true if a Pythagorean triplet is provided', () => {
            expect(_sut._isPythagoreanTriplet(3, 4, 5)).toBeTrue();
        });

        it('should return false if the triplet provided is not a Pythagorean triplet', () => {
            expect(_sut._isPythagoreanTriplet(3, 4, 6)).toBeFalse();
        });
    });
});