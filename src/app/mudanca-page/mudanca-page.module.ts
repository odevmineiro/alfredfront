import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MudancaPagePageRoutingModule } from './mudanca-page-routing.module';

import { MudancaPagePage } from './mudanca-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MudancaPagePageRoutingModule
  ],
  declarations: [MudancaPagePage]
})
export class MudancaPagePageModule {}
