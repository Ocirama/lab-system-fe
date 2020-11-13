import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AshTestComponent } from './ash-test.component';


const routes: Routes = [
  {
    path: '',
    component: AshTestComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AshTestRoutingModule {
}
