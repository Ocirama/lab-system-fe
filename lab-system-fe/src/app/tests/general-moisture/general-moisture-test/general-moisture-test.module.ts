import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralMoistureTestRoutingModule } from './general-moisture-test-routing.module';
import { GeneralMoistureTestComponent } from './general-moisture-test.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [GeneralMoistureTestComponent],
  imports: [
    CommonModule,
    GeneralMoistureTestRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ]
})
export class GeneralMoistureTestModule { }
