import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConveniencyModalPageRoutingModule } from './conveniency-modal-routing.module';

import { ConveniencyModalPage } from './conveniency-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConveniencyModalPageRoutingModule
  ],
  declarations: [ConveniencyModalPage]
})
export class ConveniencyModalPageModule {}
