import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleWeightRoutingModule } from './sample-weight-routing.module';
import { SampleWeightComponent } from './sample-weight.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';




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
        MatStepperModule,
        MatButtonModule

    ]
})
export class SampleWeightModule { }
