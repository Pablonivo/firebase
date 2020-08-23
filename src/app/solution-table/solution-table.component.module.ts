import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { MathHelper } from '../math-helper';
import { ProjectEulerManager } from '../project-euler-manager';
import { ProjectEulerSolutionComputer } from '../project-euler-solution-computer';
import { ProjectEulerSolutionHelper } from '../project-euler-solution-helper';
import { FirestoreService } from './firestore-service';
import { SolutionTableManager } from './solution-table-manager';
import { SolutionTableComponent } from './solution-table.component';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        BrowserAnimationsModule,
        CommonModule ,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule, 
        MatProgressSpinnerModule,
        MatSortModule
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