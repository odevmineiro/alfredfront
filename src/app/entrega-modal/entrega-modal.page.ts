import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-entrega-modal',
  templateUrl: './entrega-modal.page.html',
  styleUrls: ['./entrega-modal.page.scss'],
})
export class EntregaModalPage {

  constructor(private modal: ModalController) { }

  closeModal() {
    this.modal.dismiss()
  }

}
