import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListComponentPageRoutingModule } from './list-component-routing.module';

import { ListComponentPage } from './list-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListComponentPageRoutingModule
  ],
  declarations: [ListComponentPage]
})
export class ListComponentPageModule {}
