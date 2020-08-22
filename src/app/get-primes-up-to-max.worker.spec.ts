// TODO: Get this file working, or remove it alltogether. 


describe('worker', () => {
    let worker: Worker;

    beforeEach(() => {
        worker = new Worker('get-primes-up-to-max.worker.ts', {type: 'module'});
    });

    it('testtttttt', () => {
        worker.onmessage = function(result) {
            expect(result.data).toBe([2, 3, 5, 6]); //Niet 6 maar 7
        }

        worker.postMessage(10);
    });

});
