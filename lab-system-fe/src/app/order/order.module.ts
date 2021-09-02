import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderRoutingModule} from './order-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from './form/form.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {ModalComponent} from './modal/modal.component';
import {SharedModule} from '../shared/shared.module';






@NgModule({
  declarations: [FormComponent, ModalComponent],
  imports: [
    OrderRoutingModule,
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
    MatSlideToggleModule
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class OrderModule {
}
