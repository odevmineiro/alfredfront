import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregaModalPage } from './entrega-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EntregaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregaModalPageRoutingModule {}
