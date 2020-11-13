import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralMoistureTestSecondRoutingModule } from './general-moisture-test-second-routing.module';
import { GeneralMoistureTestSecondComponent } from './general-moisture-test-second.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material';



@NgModule({
  declarations: [GeneralMoistureTestSecondComponent],
  imports: [
    CommonModule,
    GeneralMoistureTestSecondRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ]
})
export class GeneralMoistureTestSecondModule { }
