import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MudancaPagePage } from './mudanca-page.page';

const routes: Routes = [
  {
    path: '',
    component: MudancaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MudancaPagePageRoutingModule {}
