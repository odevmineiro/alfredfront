import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamacaoModalPageRoutingModule } from './reclamacao-modal-routing.module';

import { ReclamacaoModalPage } from './reclamacao-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamacaoModalPageRoutingModule
  ],
  declarations: [ReclamacaoModalPage]
})
export class ReclamacaoModalPageModule {}
