import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CvListComponent} from './cv-list/cvList.component';
import {CvModalComponent} from './cv-modal/cvModal.component';
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
import {CvResultsRoutingModule} from './cv-results-routing.module';
import {MatTableExporterModule} from 'mat-table-exporter';


@NgModule({
  declarations: [CvListComponent, CvModalComponent],
  imports: [
    CommonModule,
    CvResultsRoutingModule,
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
    CvModalComponent
  ]
})
export class CvResultsModule {
}
