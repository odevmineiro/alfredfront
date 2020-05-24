import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponentPage } from './list-component.page';

const routes: Routes = [
  {
    path: '',
    component: ListComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListComponentPageRoutingModule {}
