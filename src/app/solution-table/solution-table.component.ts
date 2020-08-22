import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectEulerProblem } from '../project-euler-problem';
import { FirestoreService } from './firestore-service';
import { SolutionTableManager } from './solution-table-manager';

@Component({
  selector: 'solution-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  isLoading: boolean = false;

  problemIdCurrentlyBeingComputed: number = 0;

  constructor(
    private readonly _firestoreService: FirestoreService,
    private readonly _solutionTableManager: SolutionTableManager,
    private readonly _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._changeDetectorRef.markForCheck();

    this._firestoreService.getProjectEulerProblemsOrderedById().subscribe(
      result => {
        this.projectEulerProblems = result
        this.isLoading = false;
        this._changeDetectorRef.markForCheck();
      });
  }

  _onCompute(problemId: number): void {
    this.problemIdCurrentlyBeingComputed = problemId;
    this._changeDetectorRef.markForCheck();

    let problemToBeUpdated = this._projectEulerProblemToBeUpdated(problemId);
    let solution = this._solutionTableManager.returnSolutionAndUpdateDatabase(problemToBeUpdated);

    solution.then(solution => {
      this.localSolutions.set(problemId, solution);
      this.problemIdCurrentlyBeingComputed = 0;
      this._changeDetectorRef.markForCheck();
    })
  }

  _solutionIfComputedLocallyNullOtherwise(problemId: number): number | null {
    if (this.localSolutions.has(problemId)) {
      return this.localSolutions.get(problemId);
    }
    return null;
  }

  _isRowCurrentlyBeingComputed(projectEulerProblem: ProjectEulerProblem): boolean {
    return projectEulerProblem.problemId === this.problemIdCurrentlyBeingComputed;
  }

  private _projectEulerProblemToBeUpdated(problemId: number): ProjectEulerProblem {
    return this.projectEulerProblems.find(problem => problem.problemId === problemId);
  }
}