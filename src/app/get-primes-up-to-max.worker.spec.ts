describe('worker', () => {
    let worker: Worker;

    beforeEach(() => {
        worker = new Worker('base/src/app/get-primes-up-to-max.worker.ts', { type: 'module' });
    });

    it('should return a list of the primes up to the max parameter', (done) => {
        worker.onmessage = function(result) {
            expect(result.data).toEqual([2, 3, 5, 7]);
            done();
        }

        worker.postMessage(10);
    });

});
