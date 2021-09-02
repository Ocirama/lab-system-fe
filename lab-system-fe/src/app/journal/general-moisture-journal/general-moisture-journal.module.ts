import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralMoistureJournalRoutingModule} from './general-moisture-journal-routing.module';
import {GeneralMoistureListComponent} from './general-moisture-list/general-moisture-list.component';
import {GeneralMoistureModalComponent} from './general-moisture-modal/general-moisture-modal.component';
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
import {FormsModule} from '@angular/forms';
import {DateModalComponent} from '../total-moisture-journal/date-modal/date-modal.component';
import {MatTableExporterModule} from 'mat-table-exporter';
import {LogModule} from '../../log/log.module';
import {MatSortModule} from '@angular/material/sort';


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
        LogModule,
        MatSortModule
    ],
  entryComponents: [
    GeneralMoistureModalComponent, DateModalComponent
  ]
})
export class GeneralMoistureJournalModule {
}
