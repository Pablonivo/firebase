import { Constants } from './constants';
import { MathHelper } from './math-helper';
import { ProjectEulerSolutionComputer } from "./project-euler-solution-computer";

describe('ProjectEulerSolutionComputer', () => {
    const _sut = new ProjectEulerSolutionComputer(new MathHelper());

    describe('_getSumOfMultiplesOfNumbersBelowMax', () => {
        it('should return sum of the list of the multiples of the numbers below the max parameter', () => {
            const result = _sut._getSumOfMultiplesOfNumbersBelowMax([3, 5], 10);
            expect(result).toBe(23);
        });
    });

    describe('_getHighestPalindromeNumberAsProductOfTwoNumbersBelowMax', () => {
        it('should highest palindrome number as product of two numbers below max', () => {
            const result = _sut._getHighestPalindromeNumberAsProductOfTwoNumbersBelowMax(100);
            expect(result).toBe(9009);
        });
    });

    describe('_getSmallestNumberThatIsEvenlyDivisbleByNumbersFromOneToMax', () => {
        it('should return smallest number that is evenly divisble by numbers from one to max', () => {
            const result = _sut._getSmallestNumberThatIsEvenlyDivisbleByNumbersFromOneToMax(10);
            expect(result).toBe(2520);
        });
    });

    describe('_getSumofSquaresOfFirstNaturalNumbers', () => {
        it('should return sum of the squares of the first n natural numbers', () => {
            const result = _sut._getSumofSquaresOfFirstNaturalNumbers(10);
            expect(result).toBe(385);
        });
    });

    describe('_getSquareOfSumOfFirstNaturalNumbers', () => {
        it('should return square of the sum of the first n natural numbers', () => {
            const result = _sut._getSquareOfSumOfFirstNaturalNumbers(10);
            expect(result).toBe(3025);
        });
    });

    describe('_getLargestProductOfNAdjacentDigitsOfStringOfNumbers', () => {
        it('should return the largest product of n adjacent digits of a string of numbers', () => {
            const result = _sut._getLargestProductOfNAdjacentDigitsOfStringOfNumbers('12345', 2);
            expect(result).toBe(20);

            const result2 = _sut._getLargestProductOfNAdjacentDigitsOfStringOfNumbers(Constants._1000digitStringForProblem8, 4);
            expect(result2).toBe(5832);
        });
    });

    describe('_getProductOfPythagoreanTripletOfWhichSumEquals', () => {
        it('should return 3*4*5 = 60 if 12 is the parameter', () => {
            const result = _sut._getProductOfPythagoreanTripletOfWhichSumEquals(12);
            expect(result).toBe(60);
        });
    });

    // TODO: This test doesn't work yet; worker has different path in test environment.
    describe('_getSumOfPrimesUpToMax', () => {
        it('should return the sum of the primes up to the max parameter', (done) => {
            const result = _sut._getSumOfPrimesUpToMax(10);
            result.then(number => {
                expect(number).toBe(17);
                done();
            });
        });
    });

    describe('_getFirstTriangleNumberWhichHasAtLeastNDivisors', () => {
        it('should return the first triangle number which has a least n divisors', () => {
            const result = _sut._getFirstTriangleNumberWhichHasAtLeastNDivisors(6);
            expect(result).toBe(28);
        });
    });

    describe('solutionOfProblem1', () => {
        it('should return the correct solution', () => {
            const resultProblem1 = _sut.solutionOfProblem1;
            expect(resultProblem1).toBe(233168);
        });
    });

    describe('solutionOfProblem2', () => {
        it('should return the correct solution', () => {
            const resultProblem2 = _sut.solutionOfProblem2;
            expect(resultProblem2).toBe(4613732);
        });
    });

    describe('solutionOfProblem3', () => {
        it('should return the correct solution', () => {
            const resultProblem3 = _sut.solutionOfProblem3;
            expect(resultProblem3).toBe(6857);
        });
    });

    describe('solutionOfProblem4', () => {
        it('should return the correct solution', () => {
            const resultProblem4 = _sut.solutionOfProblem4;
            expect(resultProblem4).toBe(906609);
        });
    });

    describe('solutionOfProblem5', () => {
        it('should return the correct solution', () => {
            const resultProblem5 = _sut.solutionOfProblem5;
            expect(resultProblem5).toBe(232792560);
        });
    });

    describe('solutionOfProblem6', () => {
        it('should return the correct solution', () => {
            const resultProblem6 = _sut.solutionOfProblem6;
            expect(resultProblem6).toBe(25164150);
        });
    });

    describe('solutionOfProblem7', () => {
        it('should return the correct solution', () => {
            const resultProblem7 = _sut.solutionOfProblem7;
            expect(resultProblem7).toBe(104743);
        });
    });

    describe('solutionOfProblem8', () => {
        it('should return the correct solution', () => {
            const resultProblem8 = _sut.solutionOfProblem8;
            expect(resultProblem8).toBe(23514624000);
        });
    });

    describe('solutionOfProblem9', () => {
        it('should return the correct solution', () => {
            const resultProblem9 = _sut.solutionOfProblem9;
            expect(resultProblem9).toBe(31875000);
        });
    });

    // TODO: This test doesn't work yet; worker has different path in test environment.
    describe('solutionOfProblem10', () => {
        it('should return the correct solution', (done) => {
            const resultProblem10 = _sut.solutionOfProblem10;
            resultProblem10.then(result => {
                expect(result).toBe(142913828922);
                done();
            });
        });
    });

    describe('solutionOfProblem11', () => {
        it('should return the correct solution', () => {
            const resultProblem11 = _sut.solutionOfProblem11;
            expect(resultProblem11).toBe(70600674);
        });
    });

    describe('solutionOfProblem12', () => {
        it('should return the correct solution', () => {
            const resultProblem12 = _sut.solutionOfProblem12;
            expect(resultProblem12).toBe(76576500);
        });
    });
});