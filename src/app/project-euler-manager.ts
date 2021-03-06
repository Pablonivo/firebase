import { Injectable } from '@angular/core';
import { ProjectEulerSolutionHelper } from './project-euler-solution-helper';

@Injectable()
export class ProjectEulerManager {
    _startTime: number;
    _endTime: number;
    _numberOfMillisecondsUsedForLastComputation: number;

    constructor(private readonly _projectEulerSolutionHelper: ProjectEulerSolutionHelper) {
        
    }
    
    getSolutionOfProjectEulerProblemById(problemId: number): Promise<number> {
        this._start();
        let result = this._projectEulerSolutionHelper.getSolutionOfProblem(problemId);
        result.then(() => this._end());
        return result;
    }

    private _start(): void {
        this._startTime = performance.now();
    }

    private _end(): void {
        this._endTime = performance.now();
        // We are for now only interested in the number of milliseconds, so we use round to ignore arbitrary high precision.
        this._numberOfMillisecondsUsedForLastComputation = Math.round(this._endTime - this._startTime);
    }
}