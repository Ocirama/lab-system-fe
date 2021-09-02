import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {ModalComponent} from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
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
