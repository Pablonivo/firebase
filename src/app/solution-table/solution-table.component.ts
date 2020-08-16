import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProjectEulerProblem } from '../project-euler-problem';
import { ProjectEulerManager } from '../project-euler-manager';

@Component({
  selector: 'solution-table',
  templateUrl: './solution-table.component.html'
})
export class SolutionTableComponent {
  projectEulerProblems: ProjectEulerProblem[] = [];
  localSolutions: Map<number, number> = new Map<number, number>();
  
  constructor(
    private readonly firestore: AngularFirestore,
    private readonly projectEulerManager: ProjectEulerManager
  ) {
    firestore.collection<ProjectEulerProblem>('project-euler-problems').valueChanges().subscribe(
      result => this.projectEulerProblems = result);
  }

  onCompute(problemId: number): void {
    let problemToBeUpdated = this._projectEulerProblemToBeUpdated(problemId);
    this.localSolutions.set(problemId, this.projectEulerManager.getSolutionOfProjectEulerProblemById(problemId));

    this.firestore.collection<ProjectEulerProblem>('project-euler-problems')
      .doc<ProjectEulerProblem>(`${problemId}`)
      .update({numberOfTimesComputed: problemToBeUpdated.numberOfTimesComputed + 1});
    // TODO: Update fastest/slowest/last
  }

  _solutionIfComputedLocallyNullOtherwise(problemId: number): number | null {
    if (this.localSolutions.has(problemId)) {
      return this.localSolutions.get(problemId);
    }
    return null;
  }

  private _projectEulerProblemToBeUpdated(problemId: number): ProjectEulerProblem {
    return this.projectEulerProblems.find(problem => problem.problemId === problemId);
  }
}