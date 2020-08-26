import { Injectable } from '@angular/core';
import { WorkerFactory } from './worker-factory';

@Injectable()
export class MathHelper {
    getMultiplesOfNumberBelowMax(number: number, max: number): number[] {
        var multiples = [];
        for (let i = 1; i * number < max; i++) {
            multiples.push(i * number);
        }
        return multiples;
    }

    generateFibonacciSequenceUpToAndIncludingMax(max: number): number[] {
        var fibonacciSequence = [1, 2];
        while (fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2] <= max) {
            fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]);
        }
        return fibonacciSequence;
    }

    /**
     * Returns a list of prime factors, where a prime can occur more than once. 
     */
    getListOfPrimeFactors(number: number): number[] {
        let listOfPrimeFactors = [];
        let i = 2;

        while (number !== 1) {
            if (number % i === 0){
                number /= i;
                listOfPrimeFactors.push(i);
            }
            else {
                i++;
            }
        }
        return listOfPrimeFactors;
    }

    getPrimeFactorization(number: number): Map<number, number> {
        let listOfPrimeFactors = new Map<number, number>();
        let i = 2;

        while (number !== 1) {
            if (number % i === 0){
                if (listOfPrimeFactors.has(i)){
                    listOfPrimeFactors.set(i, listOfPrimeFactors.get(i) + 1);
                }
                else {
                    listOfPrimeFactors.set(i, 1);
                }
                number /= i;
            }
            else {
                i++;
            }
        }

        return listOfPrimeFactors;
    }

    isPalindromeNumber(number: number): boolean {
        let numberToString = number.toString();
        let stringLength = numberToString.length;

        for (let i = 0; i < stringLength; i++){
            if (numberToString[i] != numberToString[stringLength - i - 1]){
                return false;
            }
        }

        return true;
    }

    getNthPrime(n: number): number {
        let numberOfPrimesFound = 0;
        let i = 1;

        while (numberOfPrimesFound < n){
            i++;

            if (this._isPrime(i) === true) {
                numberOfPrimesFound++;
            }

        }

        return i;
    }

    getSortedListOfDivisorsOfNumber(n: number): number[] {
        let divisors: number[] = [1, n];

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors.push(i);
                divisors.push(n/i);
            }
        }

        return [...new Set(divisors)].sort((a, b) => a - b);
    }

    getNthTriangleNumber(n: number): number {
        return n * (n + 1) / 2;
    }

    async getPrimesUpTomax(max: number): Promise<number[]> {
        let worker = WorkerFactory.createWorker();
        let resultList = [];

        let promise: Promise<number[]> = new Promise(function(resolve) {
            worker.onmessage = function(e) {
                resultList = e.data;
                resolve(resultList);
            }
            worker.postMessage(max);            
        });
        
        return await promise;
    }

    _isPrime(number: number): boolean {
        if ((number === 2 || number === 3)){
            return true;
        }

        let i = 2;

        while (i <= (Math.sqrt(number))) {
            if (number % i === 0) {
                return false;
            }

            i++;
        }

        return true;
    }

    _isPythagoreanTriplet(a: number, b: number, c: number): boolean {
        return a*a + b*b === c*c
    }
}