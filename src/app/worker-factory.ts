export class WorkerFactory {
    static createWorker() {
        return new Worker('./get-primes-up-to-max.worker.ts', { type: 'module' });
    }
}