import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregaModalPageRoutingModule } from './entrega-modal-routing.module';

import { EntregaModalPage } from './entrega-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregaModalPageRoutingModule
  ],
  declarations: [EntregaModalPage]
})
export class EntregaModalPageModule {}
