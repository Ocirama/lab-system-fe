import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GmListComponent} from './gm-list/gmList.component';

const routes: Routes = [
  {
    path: '',
    component: GmListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class GmResultsRoutingModule {
}
