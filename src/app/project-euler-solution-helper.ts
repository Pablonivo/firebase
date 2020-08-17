import { Injectable } from '@angular/core';
import { ProjectEulerSolutionComputer } from './project-euler-solution-computer';

@Injectable()
export class ProjectEulerSolutionHelper {
    constructor(private readonly _projectEulerSolutionComputer: ProjectEulerSolutionComputer) {

    }

    getSolutionOfProblem(problemId: number): number {
        switch (problemId) {
            case 1:
                return this._projectEulerSolutionComputer.solutionOfProblem1;
            case 2:
                return this._projectEulerSolutionComputer.solutionOfProblem2;
            case 3:
                return this._projectEulerSolutionComputer.solutionOfProblem3;
            case 4:
                return this._projectEulerSolutionComputer.solutionOfProblem4;
            case 5:
                return this._projectEulerSolutionComputer.solutionOfProblem5;
            case 6:
                return this._projectEulerSolutionComputer.solutionOfProblem6;
            case 7:
                return this._projectEulerSolutionComputer.solutionOfProblem7;
            case 8:
                return this._projectEulerSolutionComputer.solutionOfProblem8;
            case 9:
                return this._projectEulerSolutionComputer.solutionOfProblem9;
            case 10:
                return this._projectEulerSolutionComputer.solutionOfProblem10;

            default:
                return 0;
        }
    }
}