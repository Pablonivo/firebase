import { Injectable } from '@angular/core';
import { ProjectEulerManager } from '../project-euler-manager';
import { ProjectEulerProblem } from '../project-euler-problem';
import { FirestoreService } from './firestore-service';

@Injectable()
export class SolutionTableManager {
    constructor(
        private readonly _projectEulerManager: ProjectEulerManager,
        private readonly _firestoreService: FirestoreService) {
    }

    returnSolutionAndUpdateDatabase(problemToBeUpdated: ProjectEulerProblem): Promise<number> {
        let solutionToProblem = this._projectEulerManager.getSolutionOfProjectEulerProblemById(problemToBeUpdated.problemId);
        solutionToProblem.then(() => {
            let compututationTimeInMsForLastComputation = this._projectEulerManager._numberOfMillisecondsUsedForLastComputation

            let updatedProjectEulerProblem: ProjectEulerProblem = {
                problemId: problemToBeUpdated.problemId,
                title: problemToBeUpdated.title,
                numberOfTimesComputed: problemToBeUpdated.numberOfTimesComputed + 1,
                fastestComputationTimeInMs: Math.min(compututationTimeInMsForLastComputation, problemToBeUpdated.fastestComputationTimeInMs),
                slowestComputationTimeInMs: Math.max(compututationTimeInMsForLastComputation, problemToBeUpdated.slowestComputationTimeInMs),
                lastComputationTimeInMs: compututationTimeInMsForLastComputation
            };

            this._firestoreService.updateProjectEulerProblemById(problemToBeUpdated.problemId, updatedProjectEulerProblem);
        })

        return solutionToProblem;
    }
}