import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'solution-table',
  templateUrl: './solution-table.component.html'
})
export class SolutionTableComponent {
  projectEulerProblems: Observable<ProjectEulerProblem[]>;
  
  constructor(firestore: AngularFirestore) {
    this.projectEulerProblems = firestore.collection<ProjectEulerProblem>('project-euler-problems').valueChanges();
  }
}

export class ProjectEulerProblem {
  problemId: number;
  title: string;
  numberOfTimesComputed: number;
  fastestComputationTimeInMs: number;
  slowestComputationTimeInMs: number;
  lastComputationTimeInMs: number;
}
