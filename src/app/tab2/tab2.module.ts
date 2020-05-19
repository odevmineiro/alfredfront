import { UserDataModalPage } from './../user-data-modal/user-data-modal.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';
import { GuestModalPage } from '../guest-modal/guest-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, PaymentModalPage, GuestModalPage, UserDataModalPage],
  entryComponents: [PaymentModalPage, GuestModalPage, UserDataModalPage],
})
export class Tab2PageModule {}
