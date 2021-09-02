import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TmListComponent} from './tm-list/tmList.component';
import {TmModalComponent} from './tm-modal/tmModal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {TmResultsRoutingModule} from './tm-results-routing.module';
import {MatTableExporterModule} from 'mat-table-exporter';


@NgModule({
  declarations: [TmListComponent, TmModalComponent],
  imports: [
    CommonModule,
    TmResultsRoutingModule,
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
    TmModalComponent
  ]
})
export class TmResultsModule {
}
