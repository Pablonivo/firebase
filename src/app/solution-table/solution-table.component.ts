import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProjectEulerProblem } from '../project-euler-problem';

@Component({
  selector: 'solution-table',
  templateUrl: './solution-table.component.html'
})
export class SolutionTableComponent {
  projectEulerProblems: ProjectEulerProblem[] = [];
  
  constructor(private readonly firestore: AngularFirestore) {
    firestore.collection<ProjectEulerProblem>('project-euler-problems').valueChanges().subscribe(
      result => this.projectEulerProblems = result);
  }

  onCompute(problemId: number): void {
    let problemToBeUpdated = this._projectEulerProblemToBeUpdated(problemId);

    this.firestore.collection<ProjectEulerProblem>('project-euler-problems')
      .doc<ProjectEulerProblem>(`${problemId}`)
      .update({numberOfTimesComputed: problemToBeUpdated.numberOfTimesComputed + 1});
    // TODO: Update fastest/slowest/last
  }

  private _projectEulerProblemToBeUpdated(problemId: number): ProjectEulerProblem {
    return this.projectEulerProblems.find(problem => problem.problemId === problemId);
  }
}