import { Component, OnInit } from '@angular/core';
import { ProjectEulerProblem } from '../project-euler-problem';
import { FirestoreService } from './firestore-service';
import { SolutionTableManager } from './solution-table-manager';

@Component({
  selector: 'solution-table',
  templateUrl: './solution-table.component.html',
  styleUrls: ['./solution-table.component.css']
})
export class SolutionTableComponent implements OnInit {
  projectEulerProblems: ProjectEulerProblem[] = [];
  displayedColumns: string[] = [
    'problemId',
    'title',
    'compute',
    'solution',
    'numberOfTimesComputed',
    'fastestComputationTimeInMs',
    'slowestComputationTimeInMs',
    'lastComputationTimeInMs'
  ]
  localSolutions: Map<number, number> = new Map<number, number>();

  constructor(
    private readonly _firestoreService: FirestoreService,
    private readonly _solutionTableManager: SolutionTableManager) {
  }

  ngOnInit(): void {
    this._firestoreService.getProjectEulerProblemsOrderedById().subscribe(
      result => this.projectEulerProblems = result);
  }

  _onCompute(problemId: number): void {
    let problemToBeUpdated = this._projectEulerProblemToBeUpdated(problemId);
    let solutionToProblem = this._solutionTableManager.returnSolutionAndUpdateDatabase(problemToBeUpdated);
    this.localSolutions.set(problemId, solutionToProblem);
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