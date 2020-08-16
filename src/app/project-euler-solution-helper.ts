import { Injectable } from '@angular/core';

@Injectable()
export class ProjectEulerSolutionHelper {
    getSolutionOfProblem(problemId: number): number {
        switch (problemId) {
            case 1:
                return this.solutionOfProblem1;
            default:
                return 0;
        }
    }

    get solutionOfProblem1(): number {
        return 1;
    }
}