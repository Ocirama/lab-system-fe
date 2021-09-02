import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SampleListComponent} from './sample-list/sample-list.component';
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
import {SampleRoutingModule} from './sample-routing.module';
import { SampleModalComponent } from './sample-modal/sample-modal.component';
import {MatTableExporterModule} from 'mat-table-exporter';



@NgModule({
  declarations: [SampleListComponent, SampleModalComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatPaginatorModule,
        SampleRoutingModule,
        MatToolbarModule,
        MatTableExporterModule,
        MatSortModule
    ],
  entryComponents: [
    SampleModalComponent
  ]
})
export class SampleModule {
}
