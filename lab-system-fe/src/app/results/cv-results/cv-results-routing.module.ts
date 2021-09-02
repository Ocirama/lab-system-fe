import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CvListComponent} from './cv-list/cvList.component';

const routes: Routes = [
  {
    path: '',
    component: CvListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CvResultsRoutingModule {
}
