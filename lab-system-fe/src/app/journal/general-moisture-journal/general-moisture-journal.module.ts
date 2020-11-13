import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralMoistureJournalRoutingModule} from './general-moisture-journal-routing.module';
import {GeneralMoistureListComponent} from './general-moisture-list/general-moisture-list.component';
import {GeneralMoistureModalComponent} from './general-moisture-modal/general-moisture-modal.component';
import {
  _MatMenuDirectivesModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DateModalComponent} from '../total-moisture-journal/date-modal/date-modal.component';
import {MatTableExporterModule} from 'mat-table-exporter';
import {LogModule} from '../../log/log.module';


@NgModule({
  declarations: [GeneralMoistureListComponent, GeneralMoistureModalComponent],
  imports: [
    GeneralMoistureJournalRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableExporterModule,
    LogModule
  ],
  entryComponents: [
    GeneralMoistureModalComponent, DateModalComponent
  ]
})
export class GeneralMoistureJournalModule {
}
