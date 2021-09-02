import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AcListComponent} from './ac-list/acList.component';

const routes: Routes = [
  {
    path: '',
    component: AcListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AcResultsRoutingModule {
}
