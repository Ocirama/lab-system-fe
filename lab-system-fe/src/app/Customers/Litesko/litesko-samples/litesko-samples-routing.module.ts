import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LiteskoSamplesComponent } from './litesko-samples.component';




const routes: Routes = [
  {
    path: '',
    component: LiteskoSamplesComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class LiteskoSamplesRoutingModule {
}
