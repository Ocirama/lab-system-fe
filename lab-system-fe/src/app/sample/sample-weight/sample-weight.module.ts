import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleWeightRoutingModule } from './sample-weight-routing.module';
import { SampleWeightComponent } from './sample-weight.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TabDirective } from './tab.directive';



@NgModule({
  declarations: [SampleWeightComponent,TabDirective ],
  imports: [
    CommonModule,
    SampleWeightRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule

  ]
})
export class SampleWeightModule { }
