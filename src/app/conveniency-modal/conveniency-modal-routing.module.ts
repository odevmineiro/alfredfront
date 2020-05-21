import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConveniencyModalPage } from './conveniency-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConveniencyModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConveniencyModalPageRoutingModule {}
