import { UserDataModalPage } from './../user-data-modal/user-data-modal.page';
import { GuestModalPage } from './../guest-modal/guest-modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modal: ModalController) {}

  async openModal() {
    const modal = await this.modal.create({
      component: PaymentModalPage
    });

    await modal.present();
  }

  async openGuestModal () {
    const modal = await this.modal.create({
      component: GuestModalPage
    });

    await modal.present();
  }

  async openUserDataModal() {
    const modal = await this.modal.create({
      component: UserDataModalPage
    });

    await modal.present();
  }

}
