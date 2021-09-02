import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullListComponent} from './full-list/fullList.component';

const routes: Routes = [
  {
    path: '',
    component: FullListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class FullResultsRoutingModule {
}
