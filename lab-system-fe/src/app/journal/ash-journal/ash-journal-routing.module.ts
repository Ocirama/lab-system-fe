import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AshListComponent} from './ash-list/ash-list.component';

const routes: Routes = [
  {
    path: '',
    component: AshListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AshJournalRoutingModule {
}
