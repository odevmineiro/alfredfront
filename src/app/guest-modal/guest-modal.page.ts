import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-guest-modal',
  templateUrl: './guest-modal.page.html',
  styleUrls: ['./guest-modal.page.scss'],
})
export class GuestModalPage {
  constructor(private modal: ModalController) { }
  
  closeModal() {
    this.modal.dismiss();
  }

}
