import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LiteskoListComponent} from './litesko-list/litesko-list.component';

const routes: Routes = [
  {
    path: '',
    component: LiteskoListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class LiteskoRoutingModule {
}
