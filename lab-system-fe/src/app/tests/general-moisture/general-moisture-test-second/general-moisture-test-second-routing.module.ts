import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GeneralMoistureTestSecondComponent} from './general-moisture-test-second.component';



const routes: Routes = [
  {
    path: '',
    component: GeneralMoistureTestSecondComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class GeneralMoistureTestSecondRoutingModule {
}
