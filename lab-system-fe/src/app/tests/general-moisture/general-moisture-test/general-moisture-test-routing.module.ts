import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralMoistureTestComponent } from './general-moisture-test.component';


const routes: Routes = [
  {
    path: '',
    component: GeneralMoistureTestComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class GeneralMoistureTestRoutingModule {
}
