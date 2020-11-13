import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AshJournalRoutingModule} from './ash-journal-routing.module';
import {AshListComponent} from './ash-list/ash-list.component';
import {AshModalComponent} from './ash-modal/ash-modal.component';
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
import {GeneralMoistureModalComponent} from '../general-moisture-journal/general-moisture-modal/general-moisture-modal.component';
import {DateModalComponent} from '../total-moisture-journal/date-modal/date-modal.component';
import {MatTableExporterModule} from 'mat-table-exporter';
import {LogModule} from '../../log/log.module';


@NgModule({
  declarations: [AshListComponent, AshModalComponent],
  imports: [AshJournalRoutingModule,
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
    MatDialogModule, MatToolbarModule,
    MatTableExporterModule,
    LogModule
  ],
  entryComponents: [
    AshModalComponent, DateModalComponent
  ]
})
export class AshJournalModule {
}
