import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamacaoModalPage } from './reclamacao-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ReclamacaoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclamacaoModalPageRoutingModule {}
