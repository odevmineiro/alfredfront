import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDataModalPageRoutingModule } from './user-data-modal-routing.module';

import { UserDataModalPage } from './user-data-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDataModalPageRoutingModule
  ],
  declarations: [UserDataModalPage]
})
export class UserDataModalPageModule {}
