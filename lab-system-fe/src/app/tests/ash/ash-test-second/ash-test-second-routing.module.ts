import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AshTestSecondComponent} from './ash-test-second.component';



const routes: Routes = [
  {
    path: '',
    component: AshTestSecondComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AshTestSecondRoutingModule {
}
