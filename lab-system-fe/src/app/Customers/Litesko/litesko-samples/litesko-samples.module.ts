import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LiteskoSamplesComponent} from './litesko-samples.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {LiteskoSamplesRoutingModule} from './litesko-samples-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [LiteskoSamplesComponent],
  imports: [
    LiteskoSamplesRoutingModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    NgMultiSelectDropDownModule,
    SharedModule,
    MatCardModule,
    MatSlideToggleModule,
    MatPaginatorModule

  ]
})
export class LiteskoSamplesModule {
}
