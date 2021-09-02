import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AshTestRoutingModule } from './ash-test-routing.module';
import { AshTestComponent } from './ash-test.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [AshTestComponent],
  imports: [
    CommonModule,
    AshTestRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AshTestModule { }
