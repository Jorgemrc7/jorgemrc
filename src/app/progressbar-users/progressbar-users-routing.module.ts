import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressbarUsersPage } from './progressbar-users.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressbarUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressbarUsersPageRoutingModule {}
