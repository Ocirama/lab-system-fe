import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalMoistureListComponent } from './total-moisture-list/total-moisture-list.component';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TotalMoistureListComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TotalMoistureJournalRoutingModule {
}
