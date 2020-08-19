import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { MathHelper } from '../math-helper';
import { ProjectEulerManager } from '../project-euler-manager';
import { ProjectEulerSolutionComputer } from '../project-euler-solution-computer';
import { ProjectEulerSolutionHelper } from '../project-euler-solution-helper';
import { SolutionTableComponent } from './solution-table.component';
import { SolutionTableManager } from './solution-table-manager';
import { FirestoreService } from './firestore-service';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        CommonModule ,
        MatTableModule,
        MatButtonModule
    ],
    exports: [SolutionTableComponent],
    declarations: [SolutionTableComponent],
    providers: [
        FirestoreService,
        SolutionTableManager,
        ProjectEulerManager, 
        ProjectEulerSolutionHelper, 
        ProjectEulerSolutionComputer,
        MathHelper
    ],
})

export class SolutionTableModule {
}