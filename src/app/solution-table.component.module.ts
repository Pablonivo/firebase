import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { SolutionTableComponent } from './solution-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        // AngularFireAnalyticsModule,
        // AngularFirestoreModule,
        CommonModule ,
        MatTableModule,
        MatButtonModule
    ],
    exports: [SolutionTableComponent],
    declarations: [SolutionTableComponent],
    providers: [],
})

export class SolutionTableModule {
}