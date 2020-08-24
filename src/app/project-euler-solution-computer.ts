import { Injectable } from '@angular/core';
import { Constants } from './constants';
import { MathHelper } from './math-helper';

@Injectable()
export class ProjectEulerSolutionComputer {
    constructor(private readonly _mathHelper: MathHelper) {

    }

    get solutionOfProblem1(): number {
        return this._getSumOfMultiplesOfNumbersBelowMax([3, 5], 1000);
    }

    get solutionOfProblem2(): number {
        return this._mathHelper.generateFibonacciSequenceUpToAndIncludingMax(4000000)
            .filter(x => x % 2 === 0)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    get solutionOfProblem3(): number {
        return Math.max(...this._mathHelper.getListOfPrimeFactors(600851475143));
    }

    get solutionOfProblem4(): number {
        return this._getHighestPalindromeNumberAsProductOfTwoNumbersBelowMax(1000);
    }

    get solutionOfProblem5(): number {
        return this._getSmallestNumberThatIsEvenlyDivisbleByNumbersFromOneToMax(20);
    }

    get solutionOfProblem6(): number {
        return this._getSquareOfSumOfFirstNaturalNumbers(100) - this._getSumofSquaresOfFirstNaturalNumbers(100);
    }

    get solutionOfProblem7(): number {
        return this._mathHelper.getNthPrime(10001);
    }

    get solutionOfProblem8(): number {
        return this._getLargestProductOfNAdjacentDigitsOfStringOfNumbers(Constants._1000digitStringForProblem8, 13);
    }

    get solutionOfProblem9(): number {
        return this._getProductOfPythagoreanTripletOfWhichSumEquals(1000);
    }

    get solutionOfProblem10(): Promise<number> {
        return this._getSumOfPrimesUpToMax(2000000);
    }

    get solutionOfProblem11(): number {
        return this._getLargestProductInGrid(4, Constants._gridOfNumbersForProblem11, 20);
    }

    _getSumOfMultiplesOfNumbersBelowMax(numbers: number[], max: number): number {
        var multiplesList = [];

        for (let number of numbers) {
            var multiples = this._mathHelper.getMultiplesOfNumberBelowMax(number, max);
            multiplesList = [...new Set(multiplesList.concat(multiples))]
        }

        return multiplesList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    _getHighestPalindromeNumberAsProductOfTwoNumbersBelowMax(max: number): number {
        let highestPalinedromeNumberFound = 1;

        for (let i = 1; i < max; i++) {
            for (let j = i; j < max; j++) {
                let product = i * j;
                if (this._mathHelper.isPalindromeNumber(product) && product > highestPalinedromeNumberFound) {
                    highestPalinedromeNumberFound = product;
                }
            }
        }

        return highestPalinedromeNumberFound;
    }

    _getSmallestNumberThatIsEvenlyDivisbleByNumbersFromOneToMax(max: number) {
        let requiredPrimeFactorsInNumberWeAreLookingFor = new Map<number, number>();
        let numberWeAreLookingFor = 1;

        for (let i = 2; i < max; i++) {
            let primeFactorizationSmallerNumber = this._mathHelper.getPrimeFactorization(i);

            for (let [prime, numberOfTimesInNumber] of primeFactorizationSmallerNumber) {
                if (!requiredPrimeFactorsInNumberWeAreLookingFor.has(prime)
                    || (requiredPrimeFactorsInNumberWeAreLookingFor.has(prime) && requiredPrimeFactorsInNumberWeAreLookingFor.get(prime) < numberOfTimesInNumber)) {
                    requiredPrimeFactorsInNumberWeAreLookingFor.set(prime, numberOfTimesInNumber);
                }
            }
        }

        for (let [prime, numberOfTimesInNumber] of requiredPrimeFactorsInNumberWeAreLookingFor) {
            numberWeAreLookingFor *= Math.pow(prime, numberOfTimesInNumber);
        }

        return numberWeAreLookingFor;
    }

    _getSumofSquaresOfFirstNaturalNumbers(limit: number) {
        let sum = 0;

        for (let i = 1; i <= limit; i++) {
            sum += i * i;
        }

        return sum;
    }

    _getSquareOfSumOfFirstNaturalNumbers(limit: number) {
        let sum = limit * (limit + 1) / 2;
        return sum * sum;
    }

    _getLargestProductOfNAdjacentDigitsOfStringOfNumbers(stringOfNumbers: string, numberOfAdjacentDigits: number) {
        let largestProduct = 0;

        for (let startingNumberProduct = 0; startingNumberProduct <= stringOfNumbers.length - numberOfAdjacentDigits; startingNumberProduct++) {
            let currentProduct = 1;

            for (let j = startingNumberProduct; j < startingNumberProduct + numberOfAdjacentDigits; j++) {
                currentProduct *= +stringOfNumbers.charAt(j);
            }

            if (currentProduct > largestProduct) {
                largestProduct = currentProduct;
            }
        }

        return largestProduct
    }

    _getProductOfPythagoreanTripletOfWhichSumEquals(sum: number): number {
        for (let a = 1; a < sum / 3; a++) {
            for (let b = a + 1; b < 2 * sum / 3; b++) {
                let c = sum - b - a;
                if (this._mathHelper._isPythagoreanTriplet(a, b, c)) {
                    return a * b * c
                }
            }
        }
    }

    _getLargestProductInGrid(numberOfAdjacentNumbers: number, grid: string, sizeGrid: number): number {
        let largestProductFound = 0;
        let array = grid.split(' ').map(x => parseInt(x));

        for (let x = 0; x <= sizeGrid - numberOfAdjacentNumbers; x++) {
            for (let y = 0; x + y <= array.length - numberOfAdjacentNumbers; y += sizeGrid) {
                let currentIndex = x + y;
                let currentHorizontalProduct = 1;

                for (let z = 0; z < numberOfAdjacentNumbers; z++) {
                    currentHorizontalProduct *= array[currentIndex + z];
                }

                if (currentHorizontalProduct > largestProductFound) {
                    largestProductFound = currentHorizontalProduct;
                }
            }
        }

        for (let x = 0; x < sizeGrid; x++) {
            for (let y = 0; y <= array.length - sizeGrid * numberOfAdjacentNumbers; y += sizeGrid) {
                let currentIndex = x + y;
                let currentVerticalProduct = 1;

                for (let z = 0; z < numberOfAdjacentNumbers; z++) {
                    currentVerticalProduct *= array[currentIndex + z * sizeGrid];
                }

                if (currentVerticalProduct > largestProductFound) {
                    largestProductFound = currentVerticalProduct;
                }
            }
        }

        for (let x = 0; x <= sizeGrid - numberOfAdjacentNumbers; x++) {
            for (let y = 0; y <= array.length - sizeGrid * numberOfAdjacentNumbers; y += sizeGrid) {
                let currentIndex = x + y;

                let currentLeftTopToRightBottomDiagonalProduct = 1;

                for (let z = 0; z < numberOfAdjacentNumbers; z++) {
                    currentLeftTopToRightBottomDiagonalProduct *= array[currentIndex + z * sizeGrid + z];
                }

                if (currentLeftTopToRightBottomDiagonalProduct > largestProductFound) {
                    largestProductFound = currentLeftTopToRightBottomDiagonalProduct;
                }
            }
        }

        for (let x = numberOfAdjacentNumbers - 1; x <= sizeGrid - 1; x++) {
            for (let y = 0; y <= array.length - sizeGrid * numberOfAdjacentNumbers; y += sizeGrid) {
                let currentIndex = x + y;

                let currentRightTopToLeftBottomDiagonalProduct = 1;

                for (let z = 0; z < numberOfAdjacentNumbers; z++) {
                    currentRightTopToLeftBottomDiagonalProduct *= array[currentIndex + z * sizeGrid - z];
                }

                if (currentRightTopToLeftBottomDiagonalProduct > largestProductFound) {
                    largestProductFound = currentRightTopToLeftBottomDiagonalProduct;
                }
            }
        }

        return largestProductFound;
    }

    async _getSumOfPrimesUpToMax(max: number): Promise<number> {
        let result = await this._mathHelper.getPrimesUpTomax(max);

        return result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}