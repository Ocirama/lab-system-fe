import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderRoutingModule} from './order-routing.module';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule, MatSlideToggleModule,
  MatTableModule,
} from '@angular/material';
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
