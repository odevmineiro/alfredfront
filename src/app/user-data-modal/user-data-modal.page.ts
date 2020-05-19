import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-data-modal',
  templateUrl: './user-data-modal.page.html',
  styleUrls: ['./user-data-modal.page.scss'],
})
export class UserDataModalPage {

  constructor(private modal: ModalController) { }

  closeModal() {
    this.modal.dismiss();
  }
}
