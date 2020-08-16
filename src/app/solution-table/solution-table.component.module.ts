import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { SolutionTableComponent } from './solution-table.component';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
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