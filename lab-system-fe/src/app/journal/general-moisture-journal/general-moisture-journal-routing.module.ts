import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralMoistureListComponent} from './general-moisture-list/general-moisture-list.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralMoistureListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class GeneralMoistureJournalRoutingModule {
}
