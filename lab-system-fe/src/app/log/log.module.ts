import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {ModalComponent} from './modal/modal.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {LogRoutingModule} from './log-routing.module';
import {MatTableExporterModule} from 'mat-table-exporter';
import {DateModalComponent} from '../journal/total-moisture-journal/date-modal/date-modal.component';


@NgModule({
  declarations: [ListComponent, ModalComponent, DateModalComponent],
  imports: [
    CommonModule,
    LogRoutingModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatTableExporterModule
  ],
  entryComponents: [
    ModalComponent, DateModalComponent
  ]
})
export class LogModule {
}
