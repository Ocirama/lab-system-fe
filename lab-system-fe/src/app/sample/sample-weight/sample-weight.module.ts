import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleWeightRoutingModule } from './sample-weight-routing.module';
import { SampleWeightComponent } from './sample-weight.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {MatCardModule, MatStepperModule} from '@angular/material';




@NgModule({
  declarations: [SampleWeightComponent],
  imports: [
    CommonModule,
    SampleWeightRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    MatStepperModule

  ]
})
export class SampleWeightModule { }
