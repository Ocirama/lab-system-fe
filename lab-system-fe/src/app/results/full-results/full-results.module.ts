import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FullListComponent} from './full-list/fullList.component';
import {FullModalComponent} from './full-modal/fullModal.component';
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
import {FullResultsRoutingModule} from './full-results-routing.module';
import {MatTableExporterModule} from 'mat-table-exporter';


@NgModule({
  declarations: [FullListComponent, FullModalComponent],
  imports: [
    CommonModule,
    FullResultsRoutingModule,
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
    FullModalComponent
  ]
})
export class FullResultsModule {
}
