import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TotalMoistureListComponent} from './total-moisture-list/total-moisture-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { _MatMenuDirectivesModule, MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {TotalMoistureJournalRoutingModule} from './total-moisture-journal-routing.module';
import {TotalMoistureModalComponent} from './total-moisture-modal/total-moisture-modal.component';
import {FormsModule} from '@angular/forms';
import { MatTableExporterModule } from 'mat-table-exporter';
import {DateModalComponent} from './date-modal/date-modal.component';
import {LogModule} from '../../log/log.module';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [TotalMoistureListComponent, TotalMoistureModalComponent],
    imports: [
        TotalMoistureJournalRoutingModule,
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
        LogModule,
        MatSortModule
    ],
  entryComponents: [
    TotalMoistureModalComponent,
    DateModalComponent
  ]
})
export class TotalMoistureJournalModule {
}
