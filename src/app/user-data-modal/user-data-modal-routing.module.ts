import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDataModalPage } from './user-data-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UserDataModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDataModalPageRoutingModule {}
