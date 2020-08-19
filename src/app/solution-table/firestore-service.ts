import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProjectEulerProblem } from '../project-euler-problem';

@Injectable()
export class FirestoreService {
    private readonly COLLECTION_NAME = 'project-euler-problems'

    constructor(private readonly _firestore: AngularFirestore) {

    }

    getProjectEulerProblemsOrderedById(): Observable<ProjectEulerProblem[]> {
        return this._firestore.collection<ProjectEulerProblem>(this.COLLECTION_NAME, ref => ref.orderBy('problemId')).valueChanges();
    }

    updateProjectEulerProblemById(problemId: number, updatedProblem: ProjectEulerProblem) {
        this._firestore.collection<ProjectEulerProblem>(this.COLLECTION_NAME)
            .doc<ProjectEulerProblem>(`${problemId}`)
            .update({
                numberOfTimesComputed: updatedProblem.numberOfTimesComputed,
                fastestComputationTimeInMs: updatedProblem.fastestComputationTimeInMs,
                slowestComputationTimeInMs: updatedProblem.slowestComputationTimeInMs,
                lastComputationTimeInMs: updatedProblem.lastComputationTimeInMs
            });
    }
}