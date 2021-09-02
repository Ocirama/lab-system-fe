import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LiteskoRoutingModule} from './litesko-routing.module';
import {LiteskoListComponent} from './litesko-list/litesko-list.component';
import {AshModalComponent} from './litesko-modal/ash-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatTableExporterModule} from 'mat-table-exporter';
import {LogModule} from '../../log/log.module';
import {MatSortModule} from '@angular/material/sort';
import {DateModalComponent} from '../../journal/total-moisture-journal/date-modal/date-modal.component';


@NgModule({
  declarations: [LiteskoListComponent, AshModalComponent],
  imports: [LiteskoRoutingModule,
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
    LogModule, MatSortModule
  ],
  entryComponents: [
    AshModalComponent, DateModalComponent
  ]
})
export class LiteskoModule {
}
